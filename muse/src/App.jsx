import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Artist from './components/Artist';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer'; // 음악 플레이어 추가
import Profile from './components/Profile';
import Recent from './components/Recent';
import Favorite from './components/Favorite';
import PlayList from './components/PlayList';
import Upload from './components/Upload';
import MyMusic from './components/MyMusic';
import Album from './components/Album';
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
          <Route path="/favorite" element={<Favorite/>}/>
          <Route path="/playlist" element={<PlayList/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/mymusic" element={<MyMusic/>}/>
          <Route path="/album" element={<Album/>}/>
        </Routes>
        <MusicPlayer /> {/* 항상 하단에 고정된 음악 플레이어 */}
      </div>
    </Router>
  );
}

export default App;
