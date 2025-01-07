import { useAuthRedirect } from '@hooks/useAuthRedirect';
import LoginForm from '../../components/LoginForm';
import '@styles/pages.css';

const LoginPage = () => {
  useAuthRedirect();

  return (
    <div className="container">
      <h1 className="page-title text-center">Login</h1>
      <div className="card">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
