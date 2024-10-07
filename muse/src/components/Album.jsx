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
        <div className="album-page">
            <h1 className="album-section-title">Album_Name</h1>
            <div className="album-flex-direction-row">
                <img src='./img/main_album2.jpg' className="album-image"/>
                <div className="album-song-list">
                    {songs.map((song) => (
                        <div className="album-music" key={song.id}>
                            <div className="album-song-item">
                                <img src={song.image} alt={song.title} className="album-song-image" />
                                <div className="album-song-info">
                                    <div className="album-song-detail">
                                        <span className="album-song-title">{song.title}</span>
                                        <span className="album-song-writer">{song.writer}</span>
                                    </div>
                                    <span className="album-song-duration">{song.duration}</span>
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
