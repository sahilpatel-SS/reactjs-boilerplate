import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '@utils/auth.utils';
import { ROUTES } from '@constants/routes';

export const useAuthRedirect = (redirectTo = ROUTES.DASHBOARD.ROOT) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate(redirectTo);
    }
  }, [navigate, redirectTo]);
};
