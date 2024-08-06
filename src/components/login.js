import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
   const navigate=useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Implement your login logic here
    console.log('Login submitted');
    // After successful login, redirect to the main app page or dashboard
    navigate("/dashboard");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center">
      <h1 className="mb-3">Login to Slack Clone</h1>
      <form className="w-50" onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block mb-2">
          Login
        </button>
        <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
