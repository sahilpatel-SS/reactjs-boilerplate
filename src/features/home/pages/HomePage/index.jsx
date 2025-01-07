import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import '@styles/pages.css';
import { isAuthenticated } from '../../../../utils/auth.utils';

const HomePage = () => {
  const isAuth = isAuthenticated();

  return (
    <div className="container">
      <h1 className="page-title text-center">React Boilerplate</h1>
      <h2 className="page-subtitle text-center">
        Get started with our modern React application structure
      </h2>

      <div className="grid">
        <div className="card text-center">
          <h3 className="card-title">Public Pages</h3>
          <p className="card-text">
            Explore our publicly accessible features and content
          </p>
          <Link to={ROUTES.ABOUT} className="button button-primary">
            View Public Pages
          </Link>
        </div>

        <div className="card text-center">
          <h3 className="card-title">Private Pages</h3>
          <p className="card-text">
            {isAuth 
              ? "Access your private dashboard and settings" 
              : "Login to access private features"}
          </p>
          <Link 
            to={isAuth ? ROUTES.DASHBOARD.ROOT : ROUTES.AUTH.LOGIN}
            className="button button-primary"
          >
            {isAuth ? "View Private Pages" : "Login to Access"}
          </Link>
        </div>
      </div>

      {!isAuth && (
        <div className="text-center mt-4">
          <p className="card-text">Don&apos;t have an account yet?</p>
          <Link 
            to={ROUTES.AUTH.REGISTER}
            className="button button-secondary"
          >
            Register Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
