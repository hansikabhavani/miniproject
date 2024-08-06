import React from 'react';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpPage = () => {
 const navigate=useNavigate();

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Implement your sign-up logic here
    console.log('Sign-up submitted');
    // After successful sign-up, redirect to the welcome page or dashboard
   navigate('/dashboard');
  };

  const handleLoginClick = () => {
   navigate("/login");
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center">
      <h1 className="mb-3">Sign Up for Slack Clone</h1>
      <form className="w-50" onSubmit={handleSignUpSubmit}>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" required />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block mb-2">
          Sign Up
        </button>
        <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={handleLoginClick}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
