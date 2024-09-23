import React from 'react';
import './css/MusicPlayer.css';

const MusicPlayer = () => {
    return (
        <div className="music-player">
            <div className="track-info">
                <img src="album.jpg" alt="Album Art" />
                <div>
                    <p>Official Hige Dandism - Tell Me Baby (LIVE)</p>
                </div>
            </div>
            <div className="controls">
                <button>⏮️</button>
                <button>⏯️</button>
                <button>⏭️</button>
            </div>
        </div>
    );
};

export default MusicPlayer;
