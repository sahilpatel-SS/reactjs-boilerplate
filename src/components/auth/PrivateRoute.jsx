import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth.utils';
import { ROUTES } from '@constants/routes';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = isAuthenticated();

  if (!isAuth) {
    return <Navigate to={ROUTES.AUTH.LOGIN} state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
