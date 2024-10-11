import React, { useEffect, useState } from 'react';
import './css/MyMusic.css'; // CSS 파일 연결
import { Link } from 'react-router-dom';
import {AlbumList, MusicList} from './MyMusicList';
import axios from 'axios';


const MyMusic = ({ isDarkMode }) => {
    // if(!sessionStorage.getItem("idKey")){
  //   return (
  //       <div>
  //           <meta http-equiv="refresh" content="0;url=/signIn"></meta>
  //       </div>
  //   );
  // }

  const [myAlbum, setMyAlbum]=useState([])
  const [myMusic,setMyMusic]=useState([])
  useEffect(()=>{
    let user=JSON.parse(sessionStorage.getItem('idKey'))
    

    axios.post("http://localhost:3000/api/mymusic/album",{
      uid:user.ID
    })
    .then((Response)=>{
        const obj=Response.data;
        
        setMyAlbum([...myAlbum,obj]);
    });

    axios.post("http://localhost:3000/api/mymusic/music",{
        uid:user.ID
    })
    .then((Response)=>{
        const obj=Response.data;
        
        setMyMusic([...myMusic,obj]);
    });
}, []);


  return (
    <div className={`mymusic-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1 className="section-title">My Album</h1>
      <section className="artist-album-section">
        <div className="artist-album-container">
          <>
            {
              <AlbumList item={myAlbum}/>
            }
          </>
        </div>
      </section>
      <h1 className="section-title">My Music</h1>
      <div className="song-list">
        {
          <MusicList item={myMusic}/>
        }
      </div>
    </div>
  );
};

export default MyMusic;
