import React from 'react';
import SearchBar from '../components/SearchBar';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img className="header__logo" src="linkedin_logo.png" alt="LinkedIn Logo" />
        <SearchBar />
        
      </div>
      <div className="header__right">
        <ul className="header__sections">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/network">My Network</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li>
            <a href="/messaging">Messaging</a>
          </li>
          <li>
            <a href="/notifications">Notifications</a>
          </li>
          <li>
            <a href="/me">Me</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
