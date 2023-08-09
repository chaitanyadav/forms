import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Replace this with your actual authentication logic
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setMessage('Logged in successfully!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  const handleChangePassword = (event) => {
    event.preventDefault();

    if (newPassword === confirmPassword) {
      setMessage('Password changed successfully');
    } else {
      setMessage('New password and confirm password do not match');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={() => setShowChangePassword(!showChangePassword)}>
            {showChangePassword ? 'Cancel Change Password' : 'Change Password'}
          </button>
          {showChangePassword && (
            <form onSubmit={handleChangePassword}>
              <div>
                <label htmlFor="newPassword">New Password:</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              <button type="submit">Change Password</button>
            </form>
          )}
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
