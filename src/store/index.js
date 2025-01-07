import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/store/auth.slice';
import userReducer from '../features/user/store/user.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
