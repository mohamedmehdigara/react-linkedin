import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div>
        <div>
        <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" />

          
          
<input type="text" className="header__search-input" placeholder="Search" />

        </div>
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
