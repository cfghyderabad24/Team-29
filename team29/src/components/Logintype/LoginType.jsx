import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginType.css';

const LoginType = () => {
  const navigate = useNavigate();

  const handleLogin = (userType) => {
    navigate(`/login/${userType}`);
  };

  return (
    <div className="home-container">
      <h1>Welcome to Our NGO Platform</h1>
      <p>Please select your role to login:</p>
      <div className="buttons-container">
        <button className="login-button" onClick={() => handleLogin('partner-ngo')}>Partner NGO</button>
        <button className="login-button" onClick={() => handleLogin('volunteer')}>Volunteer</button>
        <button className="login-button" onClick={() => handleLogin('foundation-officer')}>Foundation Officer</button>
      </div>
    </div>
  );
};

export default LoginType;
