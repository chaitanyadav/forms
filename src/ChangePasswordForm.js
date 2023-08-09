import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleChangePassword = () => {
    if (newPassword === confirmNewPassword) {
      // Implement change password logic here
      // For demonstration purposes, let's just show an alert
      alert('Password changed!');
      setPasswordMatchError(false);
    } else {
      setPasswordMatchError(true);
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <div className="form-group">
        <label htmlFor="currentPassword">Current Password:</label>
        <input
          type="password"
          id="currentPassword"
          placeholder="Enter Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmNewPassword">Confirm New Password:</label>
        <input
          type="password"
          id="confirmNewPassword"
          placeholder="Confirm New Password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>
      {passwordMatchError && (
        <p className="error-message">Passwords do not match!</p>
      )}
      <button
        className="button"
        onClick={handleChangePassword}
      >
        Change Password
      </button>
      <Link
        to="/"
        className="back-link"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default ChangePasswordForm;
