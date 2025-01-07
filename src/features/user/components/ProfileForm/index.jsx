import { useState, useEffect } from 'react';
import { useUser } from '@hooks/useUser';
import '@styles/pages.css';
import Button from '../../../../components/common/Button';
import Input from '../../../../components/common/Input';

const ProfileForm = () => {
  const { profile, updateProfile, error, updateSuccess, clearError } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.firstName || '',
        email: profile.email || '',
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) clearError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(formData);
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
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      {updateSuccess && <div className="success-message">Profile updated successfully!</div>}
      <Button type="submit" className="button button-primary">
        Update Profile
      </Button>
    </form>
  );
};

export default ProfileForm;
