import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import './css/MusicPlayer.css';
import Current from './Current';
import Detail from './Detail';
import Volume from './Volume';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false); // 재생 상태 관리
    const [isMute, setIsMute] = useState(false); // 음소거 상태 관리
    const [currentTime, setCurrentTime] = useState(0); // 현재 재생 시간
    const [audioSrc, setAudioSrc] = useState(''); // 오디오 소스 관리
    const [audioElement, setAudioElement] = useState(null); // 오디오 엘리먼트 관리
    const musicId = 21; // 현재 재생할 음악 ID (임시로 21번 음악 사용)
    const duration = 240; // 총 재생 시간 (초 단위, 실제로는 서버에서 가져와야 함)
    const progressBarRef = useRef(null); // 진행 바 참조

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
        window.addEventListener('resize', checkOverflow); // 윈도우 크기 변경 시 실행
        return () => {
            window.removeEventListener('resize', checkOverflow); // 크기 변경 이벤트 해제
        };
    }, []);

    useEffect(() => {
        // 음악 파일을 스트리밍하는 API 호출
        axios
            .get(`http://localhost:3000/api/music/stream/${musicId}`, {
                responseType: 'blob', // BLOB 형식으로 데이터 받기
            })
            .then((response) => {
                const audioUrl = URL.createObjectURL(response.data);
                console.log('Audio URL:', audioUrl); // 디버깅: URL 확인
                setAudioSrc(audioUrl); // 오디오 소스 설정
            })
            .catch((error) => {
                console.error('음악 스트리밍 오류:', error);
            });
    }, [musicId]);

    // 진행 바의 진행률 계산
    const progress = (currentTime / duration) * 100;

    // 재생/정지 토글 함수
    const togglePlayPause = () => {
        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }
        setIsPlaying(!isPlaying);
    };

    // 음소거 토글 함수
    const toggleMute = () => {
        setIsMute(!isMute);
        if (audioElement) {
            audioElement.muted = !isMute;
        }
    };

    // 진행 위치 변경 함수
    const handleProgressChange = (e) => {
        const progressBar = progressBarRef.current;
        const rect = progressBar.getBoundingClientRect();
        const offsetX = e.clientX - rect.left; // 클릭한 x 좌표
        const newProgress = (offsetX / rect.width) * duration; // 클릭한 위치에 따른 새 재생 시간
        setCurrentTime(newProgress); // 재생 시간을 업데이트
        audioElement.currentTime = newProgress; // 오디오 요소의 재생 시간 변경
    };

    // 드래그 이벤트 관리
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        handleProgressChange(e); // 드래그 시작 시 재생 위치 변경
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            handleProgressChange(e); // 드래그 중에 재생 위치 업데이트
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
        }
    };

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
    const toggleDetail = () => setIsDetailOpen(!isDetailOpen);

    const [isCurrentOpen, setIsCurrentOpen] = useState(false); // 현재 재생 목록 패널 상태 관리
    const toggleCurrent = () => setIsCurrentOpen(!isCurrentOpen);

    const [isVolumeVisible, setIsVolumeVisible] = useState(false); // 볼륨 패널 표시 상태
    const [volume, setVolume] = useState(50); // 볼륨 상태 (0-100 범위)

    const handleMouseEnter = () => setIsVolumeVisible(true); // 볼륨 패널 보이기
    const handleMouseLeave = () => setIsVolumeVisible(false); // 볼륨 패널 숨기기

    return (
        <div className="music-player-container">
            {/* 오디오 엘리먼트 */}
            <audio
                ref={(el) => setAudioElement(el)}
                controls
                src={audioSrc} // 오디오 소스가 올바르게 설정되었는지 확인
                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                onLoadedMetadata={(e) => e.target.duration}
            ></audio>

            {/* 진행 바 */}
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
                    <img src="/img/skip_previous.png" alt="Previous" className="control-button-extra" />
                    <img 
                        src={isPlaying ? "/img/pause.png" : "/img/play.png"} 
                        alt={isPlaying ? "Pause" : "Play"} 
                        className="control-button" 
                        onClick={togglePlayPause} 
                    />
                    <img src="/img/skip_next.png" alt="Next" className="control-button-extra" />
                </div>
                <div className="track-info">
                    <img src="/img/album.jpg" alt="Album Art" className="album-art" />
                    <div className="track-details" ref={containerRef}>
                        <p className={`track-title ${isOverflowing ? 'marquee' : ''}`}>
                            Collide - Hellberg & Deutgen vs Splitbreed (Astronaut & Barely Alive Remix)
                        </p>
                    </div>
                </div>
                <div className="controls-extra">
                    <img src="/img/shuffle.png" alt="Shuffle" className="control-button-extra" />
                    <img src="/img/repeat.png" alt="Repeat" className="control-button-extra" />
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
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        )}
                    </div>
                    <img src="/img/playlist.png" alt="Playlist" className="control-button-extra" onClick={toggleCurrent} />
                    <img src="/img/info.png" alt="Info" className="control-button-extra" onClick={toggleDetail} />
                    <Current isOpen={isCurrentOpen} setIsOpen={setIsCurrentOpen} />
                    <Detail isOpen={isDetailOpen} setIsOpen={setIsDetailOpen} />
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
