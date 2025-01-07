import axios from 'axios';
import { API_BASE_URL } from '../constants/api';
import { getToken, removeToken } from './auth';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
  (error) => {
    if (error.response?.status === 401) {
      removeToken();
      window.location.href = '/login';
    }
    return Promise.reject({
      status: error.response?.status,
      message: error.response?.data?.message || 'An error occurred',
      error: error.response?.data
    });
  }
);

export default axiosInstance;
