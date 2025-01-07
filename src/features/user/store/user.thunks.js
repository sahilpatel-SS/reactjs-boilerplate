import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../services/user.service';

export const fetchProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      return await userService.getProfile();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      return await userService.updateProfile(profileData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePassword = createAsyncThunk(
  'user/updatePassword',
  async (passwordData, { rejectWithValue }) => {
    try {
      return await userService.updatePassword(passwordData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (formData, { rejectWithValue }) => {
    try {
      return await userService.updateAvatar(formData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
