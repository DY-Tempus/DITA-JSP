import React from 'react';
import './css/Recent.css'; // CSS 파일 연결

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

const Recent = () => {
  if(!sessionStorage.getItem("idKey")){
    return (
        <div>
            <meta http-equiv="refresh" content="0;url=/signIn"></meta>
        </div>
    );
  }
return (
    <div className="recent-page">
    <h1 className="recent-section-title">Recent</h1>
    <div className="recent-song-list">
        {songs.map((song) => (
        <div key={song.id} className="recent-song-item">
            <img src={song.image} alt={song.title} className="recent-song-image" />
            <div className="recent-song-info">
                <div className="recent-song-detail">
                    <span className="recent-song-title">{song.title}</span>
                    <span className="recent-song-writer">{song.writer}</span>
                </div>
                <span className="recent-song-duration">{song.duration}</span>
            </div>
        </div>
        ))}
    </div>
    </div>
);
};

export default Recent;
