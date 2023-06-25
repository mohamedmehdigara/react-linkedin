import React from 'react';

const Network = () => {
  const networkData = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'avatar1.png',
      headline: 'Software Engineer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'avatar2.png',
      headline: 'UX Designer',
    },
    // Add more sample network connections as needed
  ];

  return (
    <div className="network">
      <h2>My Network</h2>
      {networkData.map((connection) => (
        <div className="network__connection" key={connection.id}>
          <img className="network__avatar" src={connection.avatar} alt={`${connection.name}'s Avatar`} />
          <div className="network__info">
            <div className="network__name">{connection.name}</div>
            <div className="network__headline">{connection.headline}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Network;


