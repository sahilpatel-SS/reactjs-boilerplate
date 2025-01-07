import axiosInstance from '@utils/api.utils';
import { setToken, setTokens, removeTokens } from '@utils/auth.utils';
import { ENDPOINTS } from '../../../config/api.config';

class AuthService {
  async login(credentials) {
    const response = await axiosInstance.post(ENDPOINTS.AUTH.LOGIN, credentials);
    const { accessToken, refreshToken, username } = response.data;
    setTokens(accessToken, refreshToken);
    return { accessToken, username };
  }

  async logout() {
    try {
      await axiosInstance.post(ENDPOINTS.AUTH.LOGOUT);
    } finally {
      removeTokens();
    }
  }

  async register(userData) {
    const response = await axiosInstance.post(ENDPOINTS.AUTH.REGISTER, userData);
    const { token, user } = response.data;
    setToken(token);
    return { token, user };
  }

  async refreshToken() {
    const response = await axiosInstance.post(ENDPOINTS.AUTH.REFRESH_TOKEN);
    const { token } = response.data;
    setToken(token);
    return response.data;
  }
}

export const authService = new AuthService();
