import React, { useState } from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChangePasswordForm from './ChangePasswordForm';
import ReportMasterForm from './ReportMasterForm';

function Home() {
  return (
    <div className="content">
      <h2>Welcome to the ERP Portal</h2>
      <ul className="horizontal-list">
        <li><MasterDropdown /></li>
        <li><TransactionDropdown /></li>
        <li><MaintenanceDropdown /></li>
        <li><ReportDropdown /></li>
        <li><Link to="/change-password">Change Password</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
}

function MasterDropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Master</button>
      <div className="dropdown-content">
        <span>a</span>
        <span>b</span>
        <span>c</span>
      </div>
    </div>
  );
}

function TransactionDropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Transaction</button>
      <div className="dropdown-content">
        <span>a</span>
        <span>b</span>
        <span>c</span>
      </div>
    </div>
  );
}

function MaintenanceDropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Maintenance</button>
      <div className="dropdown-content">
        <Link to="/maintenance/report-master">Report Master Form</Link>
      </div>
    </div>
  );
}

function ReportDropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Report</button>
      <div className="dropdown-content">
        <span>a</span>
        <span>b</span>
        <span>c</span>
      </div>
    </div>
  );
}

function LoginPage({ handleLogin }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    handleLogin();
  };

  return (
    <div className="login-container">
      {/* ... rest of the LoginPage code ... */}
    </div>
  );
}

function ChangePassword() {
  // ... change password form logic ...
}

function LogoutPage({ handleLogout }) {
  return (
    <div className="content">
      <h2>Logged out successfully</h2>
      <Link to="/">Return to Login Page</Link>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={loggedIn ? <Home /> : <LoginPage handleLogin={handleLogin} />} />
          <Route path="/maintenance/*" element={<MaintenanceDropdown />}>
            <Route path="report-master" element={<ReportMasterForm />} />
          </Route>
          <Route path="/report-master" element={<ReportMasterForm />} />
          <Route path="/logout" element={<LogoutPage handleLogout={handleLogout} />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
