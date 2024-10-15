import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/Detail.css';
import axios from 'axios';
import { DetailList } from './DetailList';

const Detail = ({ isOpen, setIsOpen, mid, isDarkMode }) => {
    const [musicInfo, setMusicInfo] = useState([]);
    const [comments, setComments] = useState([]);
    const  [flag,setFlag]=useState(true);
    const [errorMessage, setErrorMessage] = useState(''); // 오류 메시지 추가
    
    useEffect(() => {
        console.log(mid)
        if(!mid) {
            setMusicInfo([])
        }

        else if (mid) {
            axios.post(`http://113.198.238.115:3000/api/detail/music2`, {
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
            flag? setFlag(false):setFlag(true)
        } 
    }, [mid]);
    useEffect(()=>{
        axios.post(`http://113.198.238.115:3000/api/detail/comment`, {
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
        });
    },[flag])
    return ReactDOM.createPortal(
        <div className={`detail-panel ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
            <>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <DetailList item={musicInfo} comments={comments} isDarkMode={isDarkMode} flag={flag} setFlag={setFlag} />
            </>
        </div>,
        document.body
    );
};

export default Detail;
