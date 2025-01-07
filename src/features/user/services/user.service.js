import axiosInstance from '@utils/api.utils';
import { ENDPOINTS } from '../../../config/api.config';

class UserService {
  async getProfile() {
    try {
      const response = await axiosInstance.get(ENDPOINTS.USER.PROFILE);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updateProfile(profileData) {
    try {
      const response = await axiosInstance.put(ENDPOINTS.USER.UPDATE_PROFILE, profileData);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updatePassword(passwordData) {
    try {
      const response = await axiosInstance.put(ENDPOINTS.USER.UPDATE_PASSWORD, passwordData);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updateAvatar(formData) {
    try {
      const response = await axiosInstance.put(ENDPOINTS.USER.UPDATE_AVATAR, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    return {
      message: error.response?.data?.message || 'An error occurred',
      status: error.response?.status,
      data: error.response?.data
    };
  }
}

export const userService = new UserService();
