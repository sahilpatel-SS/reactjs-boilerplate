import React from 'react';
import '@styles/pages.css';

const AboutPage = () => {
  return (
    <div className="container">
      <h1 className="page-title text-center">About Us</h1>
      <div className="card">
        <p className="card-text">
          We are committed to providing the best user experience with our modern
          React application. Built with the latest technologies and best practices,
          our app offers a seamless and efficient solution.
        </p>
        
        <div className="mt-4">
          <h2 className="card-title">Key Features</h2>
          <ul className="feature-list">
            <li>Modern React with Hooks</li>
            <li>Redux Toolkit for State Management</li>
            <li>Feature-based Architecture</li>
            <li>Responsive Design</li>
            <li>Secure Authentication</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
