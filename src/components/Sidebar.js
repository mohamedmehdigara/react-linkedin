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
        {/* Add more sidebar navigation links as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
