import React from 'react';
import './css/Album.css'; // CSS 파일 연결

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
    return (
        <div className="album-page">
            <h1 className="section-title">Album_Name</h1>
            <div className='flex-direction-row'>
                <img src='./img/main_album2.jpg' className='album-image'/>
                <div className="song-list-album">
                    {songs.map((song) => (
                        <div className="my-music" key={song.id}>
                            <div className="song-item">
                                <img src={song.image} alt={song.title} className="song-image" />
                                <div className="song-info">
                                    <div className="song-detail">
                                        <span className="song-title">{song.title}</span>
                                        <span className="song-writer">{song.writer}</span>
                                    </div>
                                    <span className="song-duration">{song.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recent;
