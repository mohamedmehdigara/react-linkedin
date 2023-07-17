import React from 'react';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar__section">
        <h3>Add to your feed</h3>
        <div className="right-sidebar__content">
          <div className="right-sidebar__item">
            <h4>Google Cloud</h4>
            <p>Company • Computer Software</p>
            <button>Follow</button>
          </div>
          <div className="right-sidebar__item">
            <h4>Kevin Naughton</h4>
            <p>Software Engineer at Google</p>
            <button>Follow</button>
          </div>
          <div className="right-sidebar__item">
            <h4>Nasreddine Nsibi</h4>
            <p>Former Minister of Employment and vocational training - Former Government spokesman</p>
            <button>Follow</button>
          </div>
          <div className="right-sidebar__item">
            <a href="/">View all recommendations</a>
          </div>
        </div>
      </div>
      <div className="right-sidebar__section">
        <h3>About</h3>
        <div className="right-sidebar__content">
          <a href="/">Accessibility</a>
          <a href="/">Help Center</a>
        </div>
      </div>
      <div className="right-sidebar__section">
        <h3>Privacy & Terms</h3>
        <div className="right-sidebar__content">
          <a href="/">Ad Choices</a>
          <a href="/">Advertising</a>
        </div>
      </div>
      <div className="right-sidebar__section">
        <h3>Business Services</h3>
      </div>
      <div className="right-sidebar__section">
        <a href="/">Get the LinkedIn app</a>
      </div>
      <div className="right-sidebar__section">
        <p>More</p>
      </div>
      <div className="right-sidebar__section">
        <p>LinkedIn Corporation © 2023</p>
      </div>
    </div>
  );
};

export default RightSidebar;
