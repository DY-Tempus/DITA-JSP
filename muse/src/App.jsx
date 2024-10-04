import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './css/App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app">
        {!isLoggedIn ? (
          <Routes>
            <Route path="/signIn" element={<SignIn onLogin={setIsLoggedIn} />} />
            <Route path="/signUp" element={<SignUp onSignup={() => setIsLoggedIn(false)} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <>
            <Header />
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/artist" element={<Artist />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/recent" element={<Recent />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/playlist" element={<PlayList />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/mymusic" element={<MyMusic />} />
              <Route path="/album" element={<Album />} />
            </Routes>
            <MusicPlayer /> {/* 항상 하단에 고정된 음악 플레이어 */}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
