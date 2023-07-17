import React from 'react';
import Notifications from './Notifications';
import Me from './Me';

const Widgets = () => {
  const trendingTopics = [
    'React.js',
    'JavaScript',
    'Web Development',
    'Artificial Intelligence',
    // Add more trending topics as needed
  ];

  return (
    <div className="widgets">
      <h2>Trending Topics</h2>
      <ul className="widgets__list">
        {trendingTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <div className="widgets__section">
        <Notifications />
      </div>
      <div className="widgets__section">
        <Me />
      </div>
    </div>
  );
};

export default Widgets;




