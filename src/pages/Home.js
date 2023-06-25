import React from 'react';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';

const Home = () => {
  const posts = [
    {
      id: 1,
      author: {
        name: 'John Doe',
        avatar: 'avatar1.png',
      },
      content: 'Hello, world!',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      author: {
        name: 'Jane Smith',
        avatar: 'avatar2.png',
      },
      content: 'I love React!',
      timestamp: '4 hours ago',
    },
    // Add more sample posts as needed
  ];

  return (
    <div className="home">
      <Sidebar />
      <div className="home__feed">
        {posts.map((post) => (
          <Post key={post.id} author={post.author} content={post.content} timestamp={post.timestamp} />
        ))}
      </div>
      <Widgets />
    </div>
  );
};

export default Home;
