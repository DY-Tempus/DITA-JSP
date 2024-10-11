import React, { useEffect, useState } from 'react';
import './css/MyMusic.css'; // CSS 파일 연결
import { Link } from 'react-router-dom';
import {AlbumList, MusicList} from './MyMusicList';
import axios from 'axios';
const songs = [
  {
    id: 1,
    writer: "Getsix",
    title: "WIP That'll Never Come Out",
    duration: "2:48",
    image: "./img/Getsixart1.png", // 각 곡의 이미지 경로
  },
  {
    id: 2,
    writer: "Getsix",
    title: "The Psychedelic Experience",
    duration: "4:35",
    image: "./img/Getsixart2.png",
  },
  {
    id: 3,
    writer: "Getsix",
    title: "Astral Projection",
    duration: "5:53",
    image: "./img/Getsixart2.png",
  },
  {
    id: 4,
    writer: "Getsix",
    title: "Better Days",
    duration: "4:17",
    image: "./img/Getsixart2.png",
  },
  {
    id: 5,
    writer: "Getsix",
    title: "Envy",
    duration: "3:35",
    image: "./img/Getsixart2.png",
  },
  {
    id: 6,
    writer: "Getsix",
    title: "Diphenhydramine",
    duration: "1:57",
    image: "./img/Getsixart2.png",
  },
];

const artist_album_list = [
  {
    id: 1,
    img1: './img/Collide.png',
    img2: './img/main_album.jpg',
    img3: './img/main_album2.jpg',
    img4: './img/main_album3.jpg',
    name: 'Red Playlist'
  },
  {
    id: 2,
    img1: './img/Collide.png',
    img2: './img/main_album.jpg',
    img3: './img/main_album2.jpg',
    img4: './img/main_album3.jpg',
    name: 'Red Playlist'
  },
  {
    id: 3,
    img1: './img/Collide.png',
    img2: './img/main_album.jpg',
    img3: './img/main_album2.jpg',
    img4: './img/main_album3.jpg',
    name: 'Red Playlist'
  },
  {
    id: 4,
    img1: './img/Collide.png',
    img2: './img/main_album.jpg',
    img3: './img/main_album2.jpg',
    img4: './img/main_album3.jpg',
    name: 'Red Playlist'
  },
];

function AlbumItem({ item }) {
  return (
    <div key={item.id} className="album-item">
      <div className="album-cover-container">
        <Link to="/album">
          <img src={item.img4} className='album-img layer-3'></img>
          <img src={item.img3} className='album-img layer-2'></img>
          <img src={item.img2} className='album-img layer-1'></img>
          <img src={item.img1} className='album-img'></img>
        </Link>
      </div>
      <p className="album-title">{item.name}</p>
      <Link to="/updatealbum">
        <img src='./img/edit.png' className='album-edit-icon'/>
        <img src='./img/delete.png' className='album-edit-icon'/>
      </Link>
    </div>
  )
}

const MyMusic = () => {
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
    <div className="mymusic-page">
      <h1 className="section-title">My Album</h1>
      <section className="artist-album-section">
        <div className="artist-album-container">
          <>
            {
              <AlbumItem item={myAlbum}/>
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
