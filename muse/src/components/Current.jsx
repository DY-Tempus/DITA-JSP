import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/Current.css'; // CSS 파일 연결
import CurrentList from './CurrentList';
import axios from 'axios';





const Current = ({ isOpen,setIsOpen, isDarkMode,mid }) => {
  const[currentPlaylist, setCurrentPlaylist]=useState([])
  const onRemove = index => {  // onRemove 함수 생성
    setCurrentPlaylist(currentPlaylist.filter(item => item.index !== index));
  };
  useEffect(()=>{
    if(currentPlaylist.filter((item)=>{return item.MID})){
      //
    }else{
      // axios.post("http://localhost:3000/api/album/detail",{
      //   mid:mid
      // })
      // .then((Response)=>{
      //   console.log(Response.data);
      //   const obj=Response.data[0];
      //   console.log(obj)
      //   setCurrentPlaylist([...setCurrentPlaylist,obj]);
      // });
    }
  },[mid])
  
return ReactDOM.createPortal(
    <div className={`current-page ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : ''}`} >
    <h1 className="current-section-title">현재 재생중인 플레이리스트</h1>
    <div className="current-song-list">
        <>
          {
            <CurrentList item={currentPlaylist} onRemove={onRemove} isDarkMode={isDarkMode}/>
          }
        </>
    </div>
    </div>,
    document.body
);
};

export default Current;
