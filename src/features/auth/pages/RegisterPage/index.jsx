import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm';
import { useAuthRedirect } from '@hooks/useAuthRedirect';
import { isAuthenticated } from '@utils/auth.utils';
import { ROUTES } from '@constants/routes';
import '@styles/pages.css';

const RegisterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate(ROUTES.DASHBOARD.ROOT);
    }
  }, [navigate]);

  useAuthRedirect();

  return (
    <div className="container">
      <h1 className="page-title text-center">Register</h1>
      <div className="card">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
