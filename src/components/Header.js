import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="linkedin_logo.png" alt="LinkedIn Logo" />
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/network">My Network</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/messaging">Messaging</Link>
        {/* Add more navigation links as needed */}
      </nav>
    </header>
  );
};

export default Header;
