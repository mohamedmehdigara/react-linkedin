import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Network from './pages/Network';
import Jobs from './pages/Jobs';
import Messaging from './pages/Messaging';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import Header from './components/Header';
import Feed from './components/Feed';
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/network" element={<Network/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/messaging" element={<Messaging/>} />
        <Route path="/feed" exact element={<Feed/>} />
        <Route path="/header" exact element={<Header/>} />
        <Route path="/sidebar" exact element={<Sidebar/>} />
        <Route path="/widgets" exact element={<Widgets/>} />

        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
