import React from 'react';

const Messaging = () => {
  const messages = [
    {
      id: 1,
      sender: 'John Doe',
      content: 'Hey, how are you?',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      sender: 'Jane Smith',
      content: 'I have a question about the project.',
      timestamp: '4 hours ago',
    },
    // Add more sample messages as needed
  ];

  return (
    <div className="messaging">
      <h2>Messaging</h2>
      {messages.map((message) => (
        <div className="message" key={message.id}>
          <div className="message__sender">{message.sender}</div>
          <div className="message__content">{message.content}</div>
          <div className="message__timestamp">{message.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default Messaging;


