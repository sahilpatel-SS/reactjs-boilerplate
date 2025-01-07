import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProfile,
  updateProfile,
  updatePassword,
  updateAvatar,
} from '@features/user/store/user.thunks';
import { clearError, clearUpdateSuccess } from '@features/user/store/user.slice';

export const useUser = () => {
  const dispatch = useDispatch();
  const { profile, loading, error, updateSuccess } = useSelector((state) => state.user);

  const handleFetchProfile = useCallback(async () => {
    const result = await dispatch(fetchProfile());
    if (fetchProfile.fulfilled.match(result)) {
      return result.payload;
    }
    return null;
  }, [dispatch]);

  const handleUpdateProfile = useCallback(async (profileData) => {
    const result = await dispatch(updateProfile(profileData));
    if (updateProfile.fulfilled.match(result)) {
      return result.payload;
    }
    return null;
  }, [dispatch]);

  const handleUpdatePassword = useCallback(async (passwordData) => {
    const result = await dispatch(updatePassword(passwordData));
    if (updatePassword.fulfilled.match(result)) {
      return result.payload;
    }
    return null;
  }, [dispatch]);

  const handleUpdateAvatar = useCallback(async (formData) => {
    const result = await dispatch(updateAvatar(formData));
    if (updateAvatar.fulfilled.match(result)) {
      return result.payload;
    }
    return null;
  }, [dispatch]);

  const handleClearError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleClearUpdateSuccess = useCallback(() => {
    dispatch(clearUpdateSuccess());
  }, [dispatch]);

  return {
    profile,
    loading,
    error,
    updateSuccess,
    fetchProfile: handleFetchProfile,
    updateProfile: handleUpdateProfile,
    updatePassword: handleUpdatePassword,
    updateAvatar: handleUpdateAvatar,
    clearError: handleClearError,
    clearUpdateSuccess: handleClearUpdateSuccess,
  };
};
