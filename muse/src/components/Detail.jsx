import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/Detail.css';
import axios from 'axios';
import { DetailList } from './DetailList';

const Detail = ({ isOpen, setIsOpen, mid, isDarkMode }) => {
    const [musicInfo, setMusicInfo] = useState([]);
    const [comments, setComments] = useState([]);
    const [errorMessage, setErrorMessage] = useState(''); // 오류 메시지 추가

    useEffect(() => {
        if (mid) {
            axios.post(`http://localhost:3000/api/detail/music`, {
                responseType: 'json',
                mid: mid
            })
            .then((response) => {
                const obj = response.data[0];
                setMusicInfo([obj]);
            })
            .catch((error) => {
                console.error('음악 정보 가져오기 오류:', error);
                setErrorMessage('음악 정보를 불러오는 중 오류가 발생했습니다.');
                setMusicInfo([]);
            });

            axios.post(`http://localhost:3000/api/detail/comment`, {
                responseType: 'json',
                mid: mid
            })
            .then((response) => {
                const obj = response.data;
                setComments([obj]);
            })
            .catch((error) => {
                console.error('댓글 정보 가져오기 오류:', error);
                setErrorMessage('댓글을 불러오는 중 오류가 발생했습니다.');
                setComments([]);
            });
        } else {
            setErrorMessage('MID가 제공되지 않았습니다.');
        }
    }, [mid]);

    return ReactDOM.createPortal(
        <div className={`detail-panel ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
            <>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <DetailList item={musicInfo} comments={comments} isDarkMode={isDarkMode} />
            </>
        </div>,
        document.body
    );
};

export default Detail;
