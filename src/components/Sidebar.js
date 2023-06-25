import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__nav">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/connections">My network</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/messages">Messaging</Link>
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

