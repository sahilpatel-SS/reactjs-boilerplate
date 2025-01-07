import axios from 'axios';
import { getToken, getRefreshToken, setToken, removeTokens } from './auth.utils';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // Enable sending cookies with requests
});

// Flag to track if we're refreshing token
let isRefreshing = false;
// Store pending requests
let failedQueue = [];
// Track refresh token attempts
let refreshAttempts = 0;

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const clearAuthAndRedirect = () => {
  removeTokens();
  refreshAttempts = 0;
  isRefreshing = false;
  failedQueue = [];
  window.location.href = '/login';
};

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is not 401 or request has already been retried, reject
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    // Check if max refresh attempts reached (2 attempts)
    if (refreshAttempts >= 2) {
      clearAuthAndRedirect();
      return Promise.reject(new Error('Max refresh attempts reached'));
    }

    // If request is for refresh token and it failed, clear everything
    if (originalRequest.url === '/auth/refresh') {
      clearAuthAndRedirect();
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (!isRefreshing) {
      isRefreshing = true;
      refreshAttempts++;

      try {
        const refreshToken = getRefreshToken();
        const response = await axiosInstance.post('/auth/refresh', {
          refreshToken,
          expiresInMins: 1,
        });

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        // Update tokens in localStorage and axios headers
        setToken(accessToken, newRefreshToken);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        // Process pending requests
        processQueue(null, accessToken);

        // Retry original request
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        clearAuthAndRedirect();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // Add request to queue if refresh is in progress
    return new Promise((resolve, reject) => {
      failedQueue.push({ resolve, reject });
    })
      .then((token) => {
        originalRequest.headers['Authorization'] = `Bearer ${token}`;
        return axiosInstance(originalRequest);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }
);

export default axiosInstance;
