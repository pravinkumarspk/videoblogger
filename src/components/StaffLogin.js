import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/NEC_Logo.png'; // Ensure the path is correct
import './StaffLogin.css'; // Custom CSS for styling

function StaffLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      if (response.data.success) {
        // Navigate to the staff blog creation page or show success
        window.location.href = '/staff-blog'; // Adjust the route as per your app
      } else {
        setErrorMessage('Invalid login credentials.');
      }
    } catch (error) {
      console.error('Login failed', error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="staff-login-container">
      {/* College Header */}
      <header className="staff-header">
        <img src={logo} alt="College Logo" className="staff-college-logo" />
        <h1 className="staff-clg-name">NANDHA ENGINEERING COLLEGE</h1>
      </header>

      {/* Login Form */}
      <div className="staff-login-form-container">
        <h2>Staff Login</h2>
        {errorMessage && <p className="staff-error-message">{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}

export default StaffLogin;
