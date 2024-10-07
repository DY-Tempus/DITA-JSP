import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/Current.css'; // CSS 파일 연결
import CurrentList from './CurrentList';





const Current = ({ isOpen }) => {
  const[currentPlaylist, setCurrentPlaylist]=useState([
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
  ])
  const onRemove = id => {  // onRemove 함수 생성
    setCurrentPlaylist(currentPlaylist.filter(item => item.id !== id));
  };
  const onCreate = () => {
    const playlist = {
      id: 7,
      writer: "Getsix",
      title: "Diphenhydramine",
      duration: "1:57",
      image: "./img/Getsixart2.png",
    };
    setCurrentPlaylist([...currentPlaylist, playlist]);
  }
  
return ReactDOM.createPortal(
    <div className={`current-page ${isOpen ? 'open' : ''}`} >
    <h1 className="current-section-title" onClick={onCreate}>현재 재생중인 플레이리스트</h1>
    <div className="current-song-list">
        <>
          {
            <CurrentList item={currentPlaylist} onRemove={onRemove}/>
          }
        </>
    </div>
    </div>,
    document.body
);
};

export default Current;
