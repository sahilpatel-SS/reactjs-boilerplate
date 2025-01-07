import { useSelector, useDispatch } from 'react-redux';
import { login, logout, register } from '@features/auth/store/auth.thunks';
import { clearError } from '@features/auth/store/auth.slice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, loading, error } = useSelector((state) => state.auth);

  const handleLogin = async (credentials) => {
    const result = await dispatch(login(credentials));
    if (login.fulfilled.match(result)) {
      return result.payload;
    }
    return null;
  };

  const handleLogout = async () => {
    await dispatch(logout());
  };

  const handleRegister = async (userData) => {
    const result = await dispatch(register(userData));
    if (register.fulfilled.match(result)) {
      return result.payload;
    }
    return null;
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return {
    user,
    token,
    loading,
    error,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
    clearError: handleClearError,
    isAuthenticated: !!token,
  };
};
