import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__nav">
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
        <li>
          <Link to="/connections">Connections</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/me">Me</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

