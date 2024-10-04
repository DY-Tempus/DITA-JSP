import React from 'react';
import './css/Favorite.css'; // CSS 파일 연결

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

const Favorite = () => {
  if(!sessionStorage.getItem("idKey")){
    return (
        <div>
            <meta http-equiv="refresh" content="0;url=/signIn"></meta>
        </div>
    );
  }
return (
    <div className="favorite-page">
    <h1 className="favorite-section-title">Favorite</h1>
    <div className="favorite-song-list">
        {songs.map((song) => (
        <div key={song.id} className="favorite-song-item">
            <img src={song.image} alt={song.title} className="favorite-song-image" />
            <div className="favorite-song-info">
                <div className="favorite-song-detail">
                  <span className="favorite-song-title">{song.title}</span>
                  <div>
                    <span className="favorite-song-writer">{song.writer}</span>
                    <span className="favorite-song-duration">{song.duration}</span>
                  </div>
                </div>
                <img src='./img/thumbs_click.png' className="favorite-thumbs_click"/>
            </div>
        </div>
        ))}
    </div>
    </div>
);
};

export default Favorite;
