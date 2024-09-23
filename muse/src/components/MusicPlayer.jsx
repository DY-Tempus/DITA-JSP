import React, { useState } from 'react';
import './css/MusicPlayer.css';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false); // 재생 상태 관리
    const currentTime = 0; // 현재 재생 시간 (초 단위)
    const duration = 240; // 총 재생 시간 (초 단위), 예를 들어 4분 = 240초

    // 진행 바의 진행률을 계산 (기본값을 0으로 설정)
    const progress = (currentTime / duration) * 100;

    // 재생/정지 토글 함수
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player-container">
            {/* ProgressBar 통합 */}
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="music-player">
                <div className="controls">
                    <img src="/img/skip_previous.png" alt="Previous" className="control-button-extra" onClick={() => console.log('Previous clicked')} />
                    <img 
                        src={isPlaying ? "/img/pause.png" : "/img/play.png"} 
                        alt={isPlaying ? "Pause" : "Play"} 
                        className="control-button" 
                        onClick={togglePlayPause} 
                    />
                    <img src="/img/skip_next.png" alt="Next" className="control-button-extra" onClick={() => console.log('Next clicked')} />
                </div>
                <div className="track-info">
                    <img src="/img/album.jpg" alt="Album Art" className="album-art" />
                    <div className="track-details">
                        <p className="track-title">Official Hige Dandism - Tell Me Baby (LIVE)</p>
                    </div>
                </div>
                <div className="controls">
                    <img src="/img/shuffle.png" alt="Shuffle" className="control-button-extra" onClick={() => console.log('Shuffle clicked')} />
                    <img src="/img/repeat.png" alt="Repeat" className="control-button-extra" onClick={() => console.log('Repeat clicked')} />
                    <img src="/img/volume.png" alt="Volume" className="control-button-extra" onClick={() => console.log('Volume clicked')} />
                    <img src="/img/playlist.png" alt="Playlist" className="control-button-extra" onClick={() => console.log('Playlist clicked')} />
                    <img src="/img/info.png" alt="Info" className="control-button-extra" onClick={() => console.log('Info clicked')} />
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
