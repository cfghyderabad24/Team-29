import React from 'react';
import { useParams } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { userType } = useParams();

  return (
    <div className="login-container">
      <h2>Login as {userType.replace('-', ' ')}</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
