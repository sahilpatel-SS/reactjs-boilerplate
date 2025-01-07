import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { ROUTES } from '@constants/routes';
import '@styles/pages.css';
import Button from '../../../../components/common/Button';
import Input from '../../../../components/common/Input';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, error, clearError } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    expiresInMins: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value.trim()
    }));
    if (error) clearError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const result = await login(formData);
      if (result) {
        // Add a small delay to ensure auth state is updated
        setTimeout(() => {
          navigate(ROUTES.DASHBOARD.ROOT);
        }, 100);
      }
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <Input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          required
          className="form-control"
          autoComplete="username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="form-control"
          autoComplete="current-password"
        />
      </div>

      {error && <div className="error-message">{error}</div>}
      
      <Button 
        type="submit" 
        className="button button-primary" 
        disabled={isLoading}
        style={{ width: '100%' }}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>

      <div className="text-center mt-4">
        <p>Don&apos;t have an account?</p>
        <Link to={ROUTES.AUTH.REGISTER} className="button button-secondary">
          Register Now
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
