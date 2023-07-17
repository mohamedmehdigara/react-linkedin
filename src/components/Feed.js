import React from 'react';

const Feed = () => {
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      avatar: 'avatar1.png',
      content: 'Excited to start my new job at XYZ Company!',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      author: 'Jane Smith',
      avatar: 'avatar2.png',
      content: 'Looking for a talented frontend developer to join our team. Apply now!',
      timestamp: '4 hours ago',
    },
    // Add more sample posts as needed
  ];

  return (
    <div className="feed">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post__header">
            <img className="post__avatar" src={post.avatar} alt={`${post.author}'s Avatar`} />
            <div className="post__author">{post.author}</div>
            <div className="post__timestamp">{post.timestamp}</div>
          </div>
          <div className="post__content">{post.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
