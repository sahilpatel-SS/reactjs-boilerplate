import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import Button from '@components/common/Button';
import { ROUTES } from '@constants/routes';
import Input from '../../../../components/common/Input';
import '@styles/pages.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, error, clearError } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (formData.password !== formData.confirmPassword) {
      // Handle password mismatch
      return;
    }
    try {
      setIsLoading(true);
      const result = await register(formData);
      if (result) {
        // Add a small delay to ensure auth state is updated
        setTimeout(() => {
          navigate(ROUTES.DASHBOARD.ROOT);
        }, 100);
      }
    } catch (err) {
      console.error('Registration failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control"
          autoComplete="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-control"
          autoComplete="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="form-control"
          autoComplete="new-password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="form-control"
          autoComplete="new-password"
        />
      </div>

      {error && <div className="error-message">{error}</div>}
      
      <Button 
        type="submit" 
        className="button button-primary" 
        disabled={isLoading}
        fullWidth
      >
        {isLoading ? 'Registering...' : 'Register'}
      </Button>

      <div className="text-center mt-4">
        <p>Already have an account?</p>
        <Link to={ROUTES.AUTH.LOGIN} className="button button-secondary">
          Login Now
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
