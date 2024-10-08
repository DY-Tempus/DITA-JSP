import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import './css/MusicPlayer.css';
import Current from './Current';
import Detail from './Detail';
import Volume from './Volume';

const MusicPlayer = ({ isCurrentOpen, setIsCurrentOpen }) => {
    const [isPlaying, setIsPlaying] = useState(false); // 재생 상태 관리
    const [animate, setAnimate] = useState(false); // 애니메이션 상태 관리
    const [isMute, setIsMute] = useState(false); // 음소거 상태 관리
    const [currentTime, setCurrentTime] = useState(0); // 현재 재생 시간
    const [audioSrc, setAudioSrc] = useState(''); // 오디오 소스 관리
    const [audioElement, setAudioElement] = useState(null); // 오디오 엘리먼트 관리
    const [duration, setDuration] = useState(0); // 총 재생 시간 (초 단위, 서버에서 받아옴)
    const [volume, setVolume] = useState(50); // 볼륨 상태 (0-100 범위)
    const [isVolumeVisible, setIsVolumeVisible] = useState(false); // 볼륨 패널 표시 상태

    const [musicInfo, setMusicInfo] = useState({
        title: 'Unknown',
        artist: 'Unknown',
        genre: 'Unknown',
    });

    const [isOverflowing, setIsOverflowing] = useState(false);
    const titleRef = useRef(null);
    const containerRef = useRef(null);
    const progressBarRef = useRef(null); // 진행 바 참조
    const musicId = 33; // 현재 재생할 음악 ID

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
                setAudioSrc(audioUrl); // 오디오 소스 설정
            })
            .catch((error) => {
                console.error('음악 스트리밍 오류:', error);
            });

        // 음악 정보 가져오기
        axios
            .get(`http://localhost:3000/api/music/detail/${musicId}`)
            .then((response) => {
                setMusicInfo(response.data); // 음악 정보 업데이트
            })
            .catch((error) => {
                console.error('음악 정보 가져오기 오류:', error);
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

    //재생/정지 애니메이션
    useEffect(() => {
        if (isPlaying || !isPlaying) {
            setAnimate(true); // 재생 상태에서 애니메이션 활성화
            const timer = setTimeout(() => setAnimate(false), 300); // 0.3초 후 애니메이션 해제
            return () => clearTimeout(timer); // 이전 타이머 해제
        }
    }, [isPlaying]);

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

    const [isShuffle, setIsShuffle] = useState(false); // Shuffle 상태 관리
    const toggleShuffle = () => {
        setIsShuffle(!isShuffle);
    }

    const [isRepeat, setIsRepeat] = useState(0); // Repeat 상태 관리
    const toggleRepeat = () => {
        setIsRepeat((prevState) => (prevState + 1) % 3);
    };

    const [isDetailOpen, setIsDetailOpen] = useState(false); // Detail 패널 상태 관리
    const toggleDetail = () => {
        setIsDetailOpen(!isDetailOpen);
        if (!isDetailOpen) {
            setIsCurrentOpen(false);
        }
    }

    // Current 패널 상태 관리
    const toggleCurrent = () => {
        setIsCurrentOpen(!isCurrentOpen);
        if (!isCurrentOpen) {
            setIsDetailOpen(false);
        }
    }

    const handleMouseEnter = () => setIsVolumeVisible(true); // 볼륨 패널 보이기
    const handleMouseLeave = () => setIsVolumeVisible(false); // 볼륨 패널 숨기기

    useEffect(() => {
        if (audioElement) {
            audioElement.volume = volume / 100; // 오디오 엘리먼트의 볼륨 조정
        }
    }, [volume, audioElement]);

    return (
        <div className="music-player-container">
            {/* 오디오 엘리먼트 */}
            
            <audio
                ref={(el) => setAudioElement(el)}
                controls
                src={audioSrc} // 오디오 소스가 올바르게 설정되었는지 확인
                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                onLoadedMetadata={(e) => setDuration(e.target.duration)} // 메타데이터 로드 시 길이 설정
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
                        className={`control-button ${animate ? 'animate' : ''}`}
                        onClick={togglePlayPause}
                    />
                    <img src="/img/skip_next.png" alt="Next" className="control-button-extra" />
                </div>
                <div className="track-info">
                    <img src="/img/album.jpg" alt="Album Art" className="album-art" />
                    <div className="track-details" ref={containerRef}>
                        <p className={`track-title ${isOverflowing ? 'marquee' : ''}`}>
                            {musicInfo.title} - {musicInfo.artist}
                        </p>
                    </div>
                </div>
                <div className="controls-extra">
                    <img 
                        src={isShuffle ? "/img/shuffle_on.png" : "/img/shuffle.png"}
                        alt={isShuffle ? "Shuffle_on" : "Shuffle_off"}
                        className={`control-button-extra ${isShuffle ? 'on' : ''}`}
                        onClick={toggleShuffle}
                    />
                    <img 
                        src={
                            isRepeat === 0
                                ? "/img/repeat.png"
                                : isRepeat === 1
                                ? "/img/repeat_all.png"
                                : "/img/repeat_one.png"
                        }
                        alt={
                            isRepeat === 0
                                ? "Repeat Off"
                                : isRepeat === 1
                                ? "Repeat All"
                                : "Repeat One"
                        }
                        className={`control-button-extra ${
                            isRepeat !== 0 ? 'on' : ''
                        }`}
                        onClick={toggleRepeat}
                    />
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
                            />
                        )}
                    </div>
                    <label className="burger" for="burger">
                        <input type="checkbox" id="burger" checked={isCurrentOpen} onClick={toggleCurrent}/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <img // Detail Open/Closev
                        src="/img/info.png"
                        alt={isDetailOpen ? "DetailOpen" : "DetailClose"}
                        className={`control-button-extra ${isDetailOpen ? 'detailopen' : ''}`}
                        onClick={toggleDetail}
                    />
                    <Current isOpen={isCurrentOpen} setIsOpen={setIsCurrentOpen} />
                    <Detail isOpen={isDetailOpen} setIsOpen={setIsDetailOpen} />
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
