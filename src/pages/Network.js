import React from 'react';

const Network = () => {
  const connections = [
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
    // Add more sample connections as needed
  ];

  return (
    <div className="network">
      <h2>My Network</h2>
      {connections.map((connection) => (
        <div className="connection" key={connection.id}>
          <img className="connection__avatar" src={connection.avatar} alt={`${connection.name}'s Avatar`} />
          <div className="connection__info">
            <div className="connection__name">{connection.name}</div>
            <div className="connection__headline">{connection.headline}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Network;

