import React from 'react';
import './css/Volume.css';

const Volume = ({ volume, setVolume }) => {
    return (
        <div className="volume-panel">
            <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="volume-slider"
                orient="vertical" // 슬라이더를 세로로 표시
            />
        </div>
    );
};

export default Volume;
