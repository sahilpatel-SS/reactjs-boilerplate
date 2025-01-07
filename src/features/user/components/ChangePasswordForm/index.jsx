import { useState } from 'react';
import { useUser } from '@hooks/useUser';
import '@styles/pages.css';
import Button from '../../../../components/common/Button';
import Input from '../../../../components/common/Input';

const ChangePasswordForm = () => {
  const { updatePassword, error, updateSuccess, clearError } = useUser();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) clearError();
    if (passwordMismatch) setPasswordMismatch(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    await updatePassword({
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword,
    });
    if (updateSuccess) {
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="currentPassword">Current Password</label>
        <Input
          type="password"
          id="currentPassword"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="newPassword">New Password</label>
        <Input
          type="password"
          id="newPassword"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm New Password</label>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>

      {passwordMismatch && (
        <div className="error-message">New password and confirmation do not match</div>
      )}
      {error && <div className="error-message">{error}</div>}
      {updateSuccess && <div className="success-message">Password updated successfully!</div>}

      <Button type="submit" className="button button-primary">
        Change Password
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
