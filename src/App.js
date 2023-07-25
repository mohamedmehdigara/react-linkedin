import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Network from './pages/Network';
import Jobs from './pages/Jobs';
import Messaging from './pages/Messaging';
import Notifications from './components/Notifications';
import Me from './components/Me';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Main from './components/Main';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/network" element={<Network/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/messaging" element={<Messaging/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/me" element={<Me/>} />
        </Routes>
        <Main/>
        <RightSidebar/>
      </div>
    </Router>
  );
};

export default App;
