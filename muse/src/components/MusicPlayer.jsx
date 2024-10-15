import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import './css/MusicPlayer.css';
import Current from './Current';
import Detail from './Detail';
import Volume from './Volume';

const MusicPlayer = ({ isDarkMode,mid }) => {
    useEffect(()=>{
        axios.post("http://localhost:3000/api/fake/view",{
            mid:mid
        })
        .then((Response)=>{
            console.log(Response.data)
        });
        setCurrentMusicId(mid)
    },[mid])
    const [isPlaying, setIsPlaying] = useState(false); // 재생 상태 관리
    const [animate, setAnimate] = useState(false); // 애니메이션 상태 관리
    const [isMute, setIsMute] = useState(false); // 음소거 상태 관리
    const [currentTime, setCurrentTime] = useState(0); // 현재 재생 시간
    const [audioSrc, setAudioSrc] = useState(''); // 오디오 소스 관리
    const [audioElement, setAudioElement] = useState(null); // 오디오 엘리먼트 관리
    const [duration, setDuration] = useState(0); // 총 재생 시간 (초 단위)
    const [volume, setVolume] = useState(50); // 볼륨 상태 (0-100 범위)
    const [isVolumeVisible, setIsVolumeVisible] = useState(false); // 볼륨 패널 표시 상태
    const [imageSrc, setImageSrc] = useState(''); // 이미지 소스 상태

    const [musicInfo, setMusicInfo] = useState(null);

    const [isShuffle, setIsShuffle] = useState(false); // Shuffle 상태 관리
    const [isRepeat, setIsRepeat] = useState(0); // Repeat 상태 관리

    const [isOverflowing, setIsOverflowing] = useState(false);
    const titleRef = useRef(null);
    const containerRef = useRef(null);
    const progressBarRef = useRef(null); // 진행 바 참조
    const [currentMusicId, setCurrentMusicId] = useState(null); // 현재 재생할 MID

    const [isDetailOpen, setIsDetailOpen] = useState(false); // Detail 패널 상태 관리
    const [isCurrentOpen, setIsCurrentOpen] = useState(false); // Current 패널 상태 관리

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
        if(currentMusicId==null){ 
            setMusicInfo(null)
            setImageSrc(null)
            setAudioElement(null)
            URL.revokeObjectURL(audioSrc)
            setAudioSrc(null)
            setDuration(null)
            return
        }
        // 새 MID에 맞춰 음악 파일, 상세 정보, 이미지 다시 가져오기
        axios
            .get(`http://113.198.238.115:3000/api/music/stream/${currentMusicId}`, {
                responseType: 'blob', // BLOB 형식으로 데이터 받기
            })
            .then((response) => {
                const audioUrl = URL.createObjectURL(response.data);
                setAudioSrc(audioUrl); // 오디오 소스 설정
            })
            .catch((error) => {
                console.error('음악 스트리밍 오류:', error);
            });

        axios
            .get(`http://113.198.238.115:3000/api/music/detail/${currentMusicId}`)
            .then((response) => {
                setMusicInfo(response.data); // 음악 정보 업데이트

            })
            .catch((error) => {
                console.error('음악 정보 가져오기 오류:', error);
            });

        axios
            .get(`http://113.198.238.115:3000/api/music/image/${currentMusicId}`, {
                responseType: 'arraybuffer', // BLOB 데이터를 ArrayBuffer로 받음
            })
            .then((response) => {
                const uint8Array = new Uint8Array(response.data);  // Buffer 데이터를 Uint8Array로 변환
                const blob = new Blob([uint8Array], { type: 'image/jpeg' });
                const reader = new FileReader();

                reader.onloadend = () => {
                    setImageSrc(reader.result);  // Base64 URL로 변환된 이미지 저장
                };

                reader.readAsDataURL(blob);  // BLOB 데이터를 Base64로 변환
            })
            .catch((error) => {
                console.error('이미지 가져오기 오류:', error);
            });
    }, [currentMusicId]);

    // 진행 바의 진행률 계산
    const progress = (currentTime / duration) * 100;

    // 재생/정지 토글 함수
    const togglePlayPause = () => {
        if(audioSrc!=null){
            if (isPlaying) {
                audioElement.pause();
            } else {
                audioElement.play();
            }
        }
        setIsPlaying(!isPlaying);
    };

    // currentMusicId가 변경되고 메타데이터가 로드되면 자동 재생
    const handleLoadedMetadata = () => {
        setDuration(audioElement.duration); // 곡의 길이 설정
        if (isPlaying && audioElement) {
            audioElement.play(); // 곡이 로드된 후 자동 재생
        }
    };

    // 시간을 업데이트하고 진행 바를 갱신하는 함수
    const handleTimeUpdate = () => {
        setCurrentTime(audioElement.currentTime); // 현재 재생 시간 업데이트
    };

    // Shuffle 토글 함수
    const toggleShuffle = () => {
        setIsShuffle(!isShuffle);
    };

    // Repeat 토글 함수
    const toggleRepeat = () => {
        setIsRepeat((prevState) => (prevState + 1) % 3); // Repeat 상태를 0, 1, 2로 순환
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

    // 이전 곡으로 이동하는 함수
    const handlePrevious = () => {
        axios
            .get(`http://113.198.238.115:3000/api/music/previous/${currentMusicId}`)
            .then((response) => {
                const prevId = response.data.prevId;
                setCurrentMusicId(prevId); // 이전 곡의 MID로 상태 변경
            })
            .catch((error) => {
                console.error('이전 곡 가져오기 오류:', error);
            });
    };

    // 다음 곡으로 이동하는 함수
    const handleNext = () => {
        axios
            .get(`http://113.198.238.115:3000/api/music/next/${currentMusicId}`)
            .then((response) => {
                const nextId = response.data.nextId;
                setCurrentMusicId(nextId); // 다음 곡의 MID로 상태 변경
            })
            .catch((error) => {
                console.error('다음 곡 가져오기 오류:', error);
            });
    };

    const handleMouseEnter = () => setIsVolumeVisible(true); // 볼륨 패널 보이기
    const handleMouseLeave = () => setIsVolumeVisible(false); // 볼륨 패널 숨기기

    useEffect(() => {
        if (audioElement) {
            audioElement.volume = volume / 100; // 오디오 엘리먼트의 볼륨 조정
        }
    }, [volume, audioElement]);

    // Current 패널 상태 토글
    const toggleCurrent = () => {
        setIsCurrentOpen(!isCurrentOpen);
        if (!isCurrentOpen) {
            setIsDetailOpen(false);
        }
    };

    // Detail 패널 상태 토글
    const toggleDetail = () => {
        setIsDetailOpen(!isDetailOpen);
        if (!isDetailOpen) {
            setIsCurrentOpen(false);
        }
    };

    return (
        <div className={`music-player-container ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* 오디오 엘리먼트 */}
            <audio
                ref={(el) => setAudioElement(el)}
                controls
                src={audioSrc} // 오디오 소스가 올바르게 설정되었는지 확인
                onTimeUpdate={handleTimeUpdate} // 현재 시간 업데이트
                onLoadedMetadata={handleLoadedMetadata} // 메타데이터 로드 시 자동 재생
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
                    <img
                        src="/img/skip_previous.png"
                        alt="Previous"
                        className="control-button-extra"
                        onClick={handlePrevious} // 이전 곡으로 이동
                    />
                    <img
                        src={isPlaying ? "/img/pause.png" : "/img/play.png"}
                        alt={isPlaying ? "Pause" : "Play"}
                        className={`control-button ${animate ? 'animate' : ''}`}
                        onClick={togglePlayPause}
                    />
                    <img
                        src="/img/skip_next.png"
                        alt="Next"
                        className="control-button-extra"
                        onClick={handleNext} // 다음 곡으로 이동
                    />
                </div>
                <div className="track-info">
                    {imageSrc ? (
                        <img src={imageSrc} alt="Album Art" className="album-art" />
                    ) : (
                        <></>
                    )}
                    <div className="track-details" ref={containerRef}>
                        {musicInfo?(
                            <p className={`track-title ${isOverflowing ? 'marquee' : ''}`}>
                            
                            {musicInfo.title} - {musicInfo.artist}
                        </p>
                        ):(
                            <p>재생중인 곡이 없습니다.</p>
                        )}
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
                    <label className="burger" htmlFor="burger">
                        <input type="checkbox" id="burger" checked={isCurrentOpen} onClick={toggleCurrent} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <img
                        src="/img/info.png"
                        alt={isDetailOpen ? "DetailOpen" : "DetailClose"}
                        className={`control-button-extra ${isDetailOpen ? 'detailopen' : ''}`}
                        onClick={toggleDetail}
                    />
                    <Current isOpen={isCurrentOpen} setIsOpen={setIsCurrentOpen} isDarkMode={isDarkMode} musicInfo={musicInfo} setMid={setCurrentMusicId} />
                    <Detail isOpen={isDetailOpen} setIsOpen={setIsDetailOpen} mid={currentMusicId} isDarkMode={isDarkMode} />
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
