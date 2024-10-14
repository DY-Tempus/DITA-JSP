import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/Current.css'; // CSS 파일 연결
import CurrentList from './CurrentList';
import axios from 'axios';


const Current = ({ isOpen,setIsOpen, isDarkMode,musicInfo,setMid }) => {
  const[currentPlaylist, setCurrentPlaylist]=useState([])
  const[list,setList]=useState([])
  
  const onRemove = (element,idx) => {  // onRemove 함수 생성
    
    
    var findidx=currentPlaylist.findIndex((item)=>item.index==idx)
    if(currentPlaylist.length>findidx){
      setMid(currentPlaylist[findidx+1])
    }else{
      setMid(null)
    }
      
    setCurrentPlaylist(currentPlaylist.filter(item=>item!=element))
    setMid(null)
  };
  const index=useRef(1)
  useEffect(()=>{
    if(!musicInfo) return

    if(!currentPlaylist){
      if(currentPlaylist.filter(item=> item==musicInfo)){

      }
    }
    else{
      const data=JSON.stringify(musicInfo)
      const data2=JSON.parse(`{"index":${index.current},"info":${data}}`)
      
      setCurrentPlaylist([...currentPlaylist,data2])
      index.current+=1
    }
  },[musicInfo])


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
}

export default Current;
