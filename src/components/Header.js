import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img className="header__logo" src="linkedin_logo.png" alt="LinkedIn Logo" />
      </div>
      <div className="header__right">
        <div className="header__search">
          <input type="text" className="header__search-input" placeholder="Search" />
        </div>
        <ul className="header__sections">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/network">My Network</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/messaging">Messaging</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <Link to="/me">Me</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

