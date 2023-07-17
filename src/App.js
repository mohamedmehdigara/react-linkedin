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

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar/>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/network" component={Network} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/messaging" component={Messaging} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/me" component={Me} />
        </Routes>
        <RightSidebar/>
      </div>
    </Router>
  );
};

export default App;
