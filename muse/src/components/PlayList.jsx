import React from 'react';
import './css/PlayList.css';

const playlists = [
    { id: 1, img1: './img/Collide.png', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album3.jpg',  name: 'Red Playlist' },
    { id: 2, img1: './img/Collide.png', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album3.jpg',  name: 'Red Playlist' },
    { id: 3, img1: './img/Collide.png', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album3.jpg',  name: 'Red Playlist' },
    { id: 4, img1: './img/Collide.png', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album3.jpg',  name: 'Red Playlist' },
];

const PlayList = () => {
    if(!sessionStorage.getItem("idKey")){
        return (
            <div>
                <meta http-equiv="refresh" content="0;url=/signIn"></meta>
            </div>
        );
    }
    return (
        <div className="playlist-page">
            <h1 className="playlist-title">My Playlist</h1>
            <div className="playlist-container">
                {playlists.map((playlist) => (
                    <div key={playlist.id} className="playlist-item">
                        <div className="playlist-card">
                            <img src={playlist.img4} className='album-img layer-3'></img>
                            <img src={playlist.img3} className='album-img layer-2'></img>
                            <img src={playlist.img2} className='album-img layer-1'></img>
                            <img src={playlist.img1} className='album-img'></img>
                        </div>
                        <p className="playlist-name">{playlist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayList;
