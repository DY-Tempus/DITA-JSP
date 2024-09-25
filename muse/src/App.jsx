import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Artist from './components/Artist';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer'; // 음악 플레이어 추가
import Profile from './components/Profile';
import Recent from './components/Recent';
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recent" element={<Recent />}/>
        </Routes>
        <MusicPlayer /> {/* 항상 하단에 고정된 음악 플레이어 */}
      </div>
    </Router>
  );
}

export default App;
