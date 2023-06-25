import React from 'react';

const Me = () => {
  return (
    <div className="me">
      <h2>Me</h2>
      <div className="me__content">
        <img className="me__avatar" src="my_avatar.png" alt="My Avatar" />
        <div className="me__info">
          <div className="me__name">John Doe</div>
          <div className="me__headline">Software Engineer</div>
        </div>
      </div>
    </div>
  );
};

export default Me;
