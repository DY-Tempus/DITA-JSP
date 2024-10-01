import React from 'react';
import ReactDOM from 'react-dom';
import './css/Current.css'; // CSS 파일 연결
function CurrentItem({item}){
  return(
    <div className="current-my-music" key={item.id}>
    <div className="current-song-item">
        <img src={item.image} alt={item.title} className="current-song-image" />
        <div className="current-song-info">
            <div className="current-song-detail">
                <span className="current-song-title">{item.title}</span>
                <span className="current-song-writer">{item.writer}</span>
            </div>
            <span className="current-song-duration">{item.duration}</span>
        </div>
    </div>
    <img src='./img/move.png' className='thumbs-views'/>
    <img src='./img/delete.png' className='thumbs-views'/>
  </div>
  )
}

const currentPlaylist = [
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

const Current = ({ isOpen }) => {
return ReactDOM.createPortal(
    <div className={`current-page ${isOpen ? 'open' : ''}`} >
    <h1 className="current-section-title">현재 재생중인 플레이리스트</h1>
    <div className="current-song-list">
        <>
          {
            currentPlaylist.map(
              item=>(<CurrentItem item={item} key={item.id}/>)
            )
          }
        </>
    </div>
    </div>,
    document.body
);
};

export default Current;
