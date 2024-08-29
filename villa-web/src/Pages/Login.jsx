import React, { useState } from 'react';
import "../Style/Login.css";

const Login = () => {
  const [showForm, setShowForm] = useState(true);

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    showForm && (
      <div className="login-container">
        <div className="login-form">
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
          <p>
            If you are not a user, please <a href="/register">register</a>.
          </p>
        </div>
      </div>
    )
  );
};

export default Login;
