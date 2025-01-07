import { useEffect } from 'react';
import { useUser } from '@hooks/useUser';
import ProfileForm from '../../components/ProfileForm';
import ChangePasswordForm from '../../components/ChangePasswordForm';
import '@styles/pages.css';

const DashboardPage = () => {
  const { profile, loading, error, fetchProfile } = useUser();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        await fetchProfile();
      } catch (err) {
        console.error('Failed to load profile:', err);
      }
    };
    loadProfile();
  }, [fetchProfile]);

  if (loading) return <div className="container text-center">Loading...</div>;
  if (error) return <div className="container text-center">Error: {error}</div>;

  return (
    <div className="container">
      <h1 className="page-title text-center">Dashboard</h1>
      {profile && (
        <div className="grid">
          <div className="card">
            <h2 className="card-title">Profile Information</h2>
            <ProfileForm />
          </div>
          
          <div className="card">
            <h2 className="card-title">Change Password</h2>
            <ChangePasswordForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
