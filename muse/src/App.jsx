import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
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
import AlbumUpload from './components/AlbumUpload';
import UpdateAlbum from './components/UpdateAlbum';
import UpdateMusic from './components/UpdateMusic';
import Search from './components/Search';
import './css/App.css';


function App() {
  const [mid,setMid]=useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCurrentOpen, setIsCurrentOpen] = useState(false); //Current페이지 상태 관리
  const [isDarkMode, setIsDarkMode] = useState(false); //다크모드
  const location = useLocation();
  const hideOnPaths = ['/SignIn', '/SignUp','/signup','/signin'];
  const [searchText,setSearchText]=useState(null)
  const navigate = useNavigate();

  useEffect(()=>{
    if(searchText==null||searchText==''){

    }else{
      navigate(`search/${searchText}`)
    }
    
  },[searchText])
  return (

      <div className="app">
        {!hideOnPaths.includes(location.pathname) && (
          <>
            <Header setSearchText={setSearchText}/>
            <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          </>
        )}
        {/* <Header setIsCurrentOpen={setIsCurrentOpen}/>
            <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode}/>} />
          <Route path="/home" element={<Home isDarkMode={isDarkMode} mid={setMid} />} />
          <Route path="/artist/:id" element={<Artist mid={setMid}/>} />
          <Route path="/profile" element={<Profile isDarkMode={isDarkMode}/>} />
          <Route path="/recent" element={<Recent isDarkMode={isDarkMode}/>} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/albumupload" element={<AlbumUpload />} />
          <Route path="/mymusic" element={<MyMusic isDarkMode={isDarkMode} mid={setMid}/>} />
          <Route path="/album/:id/:aid" element={<Album mid={setMid}/>} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/updatealbum/:aid" element={<UpdateAlbum />} />
          <Route path="/updatemusic" element={<UpdateMusic />} />
          <Route path="/search/:text" element={<Search isDarkMode={isDarkMode} />} />
        </Routes>
        {/* <MusicPlayer isCurrentOpen={isCurrentOpen} setIsCurrentOpen={setIsCurrentOpen} /> 항상 하단에 고정된 음악 플레이어 */}
        {!hideOnPaths.includes(location.pathname) && <MusicPlayer isDarkMode={isDarkMode} mid={mid}/>}
      </div>

  );
}

export default App;
