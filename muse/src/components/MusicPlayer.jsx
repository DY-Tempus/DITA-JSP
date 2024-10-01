import React, { useRef, useState, useEffect } from 'react';
import './css/MusicPlayer.css';
import Current from './Current';
import Detail from './Detail'
import Volume from './Volume'

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false); // 재생 상태 관리
    const [isMute, setIsMute] = useState(false); // 음소거 상태 관리
    const [currentTime, setCurrentTime] = useState(0); // 현재 재생 시간
    const duration = 240; // 총 재생 시간 (초 단위)
    const progressBarRef = useRef(null); // 진행바를 참조할 ref
    const [isDragging, setIsDragging] = useState(false); // 드래그 상태 관리

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

    // 진행 바의 진행률을 계산
    const progress = (currentTime / duration) * 100;

    // 재생/정지 토글 함수
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // 음소거 토글 함수
    const toggleMute = () => {
        setIsMute(!isMute);
    };

    // 클릭 또는 드래그 시 재생 위치 변경 함수
    const handleProgressChange = (e) => {
        const progressBar = progressBarRef.current;
        const rect = progressBar.getBoundingClientRect();
        const offsetX = e.clientX - rect.left; // 클릭한 x좌표 계산
        const newProgress = (offsetX / rect.width) * duration; // 클릭한 위치에 따른 새 재생 시간 계산
        setCurrentTime(newProgress); // 재생 시간을 업데이트
    };
    // 드래그 시작
    const handleMouseDown = (e) => {
        setIsDragging(true);
        handleProgressChange(e); // 첫 클릭 시 재생 위치 변경
    };

    // 드래그 중
    const handleMouseMove = (e) => {
        if (isDragging) {
            handleProgressChange(e); // 마우스 이동 중에 재생 위치 업데이트
        }
    };

    // 드래그 종료
    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
        }
    };

    // 마우스 업 이벤트 리스너 추가
    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    const [isDetailOpen, setIsDetailOpen] = useState(false); // Detail 패널 상태 관리

    const toggleDetail = () => {
        setIsDetailOpen(!isDetailOpen);
        //버튼 클릭시 Detail이 나옴
    };

    const [isCurrentOpen, setIsCurrentOpen] = useState(false); // Detail 패널 상태 관리

    const toggleCurrent = () => {
        setIsCurrentOpen(!isCurrentOpen);
        //버튼 클릭시 Detail이 나옴
    };

    const [isVolumeVisible, setIsVolumeVisible] = useState(false); // 볼륨 패널 표시 상태
    const [volume, setVolume] = useState(50); // 볼륨 상태 (0-100 범위)

    const handleMouseEnter = () => { // 볼륨 패널 보이기
        setIsVolumeVisible(true);
    };
    const handleMouseLeave = () => { // 볼륨 패널 숨기기
        setIsVolumeVisible(false);
    };

    return (
        <div className="music-player-container">
            {/* ProgressBar 통합 */}
            <div 
                className="progress-bar-container" 
                ref={progressBarRef}
                onClick={handleProgressChange} // 진행바 클릭 이벤트 추가
                onMouseDown={handleMouseDown} // 드래그 시작
            >
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="music-player">
                <div className="controls">
                    <img src="/img/skip_previous.png" alt="Previous" className="control-button-extra" onClick={() => console.log('Previous clicked')} />
                    <img // 재생, 멈춤 버튼
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
                    <div 
                        className="volume-container" 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img 
                            src={isMute ? "/img/mute.png" : "/img/volume.png"} 
                            alt={isMute ? "Mute" : "Volume"} 
                            className="control-button-extra" 
                            onClick={toggleMute} 
                        />
                        {isVolumeVisible && (
                        <Volume
                            volume={volume} 
                            setVolume={setVolume}
                            onMouseEnter={handleMouseEnter} // 마우스가 패널에 진입했을 때
                            onMouseLeave={handleMouseLeave} // 마우스가 패널을 떠났을 때
                        />
                )}
                    </div>
                    <img src="/img/playlist.png" alt="Playlist" className="control-button-extra" onClick={toggleCurrent} />
                    <img src="/img/info.png" alt="Info" className="control-button-extra" onClick={toggleDetail} />
                    {/* Detail 컴포넌트 */}
                    <Current isOpen={isCurrentOpen} setIsOpen={setIsCurrentOpen} />
                    <Detail isOpen={isDetailOpen} setIsOpen={setIsDetailOpen} />
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
