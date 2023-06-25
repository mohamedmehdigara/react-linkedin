import React from 'react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      message: 'John Doe liked your post.',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      message: 'Jane Smith commented on your article.',
      timestamp: '4 hours ago',
    },
    // Add more sample notifications as needed
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.map((notification) => (
        <div className="notification" key={notification.id}>
          <div className="notification__message">{notification.message}</div>
          <div className="notification__timestamp">{notification.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
