import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main">
        <Sidebar />
        <div className="content">
          <Feed />
          <Widgets />
        </div>
      </main>
    </div>
  );
};

export default Home;

