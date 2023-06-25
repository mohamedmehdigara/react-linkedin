import React from 'react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      text: 'You have a new connection request.',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      text: 'Your post reached 100 likes.',
      timestamp: '4 hours ago',
    },
    // Add more sample notifications as needed
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.map((notification) => (
        <div className="notification" key={notification.id}>
          <div className="notification__text">{notification.text}</div>
          <div className="notification__timestamp">{notification.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;

