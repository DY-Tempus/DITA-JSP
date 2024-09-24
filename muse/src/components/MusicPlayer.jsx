import React, { useRef, useState, useEffect } from 'react';
import './css/MusicPlayer.css';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false); // 재생 상태 관리
    const currentTime = 0; // 현재 재생 시간 (초 단위)
    const duration = 240; // 총 재생 시간 (초 단위), 예를 들어 4분 = 240초

    const [isOverflowing, setIsOverflowing] = useState(false);
    const titleRef = useRef(null);
    const containerRef = useRef(null);

      // 텍스트가 넘치는지 확인하는 함수
    const checkOverflow = () => {
    if (titleRef.current && containerRef.current) {
      const titleWidth = titleRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      setIsOverflowing(titleWidth > containerWidth); // 제목이 컨테이너보다 긴지 확인
        }
    };

    useEffect(() => {
        checkOverflow(); // 초기 로드 시 실행
        window.addEventListener('resize', checkOverflow); // 윈도우 크기가 변경될 때마다 실행
    
        return () => {
          window.removeEventListener('resize', checkOverflow); // 크기 변경 이벤트 리스너 해제
        };
      }, []);
    
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
                    <div className="track-details" ref={containerRef}>
                        <p className={`track-title ${isOverflowing ? 'marquee' : ''}`}>Collide - Hellberg & Deutgen vs Splitbreed (Astronaut & Barely Alive Remix)</p>
                    </div>
                </div>
                <div className="controls-extra">
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
