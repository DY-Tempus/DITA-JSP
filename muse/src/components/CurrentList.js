import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ReactDOM from 'react-dom';
import {OptionList} from './optionValues'

function CurrentItemCon({ item, onRemove, isDarkMode }) {
    const [imageSrc, setImageSrc] = useState(null);
    useEffect(() => {
        if (item.info.mimg && item.info.mimg.data) {
            const uint8Array = new Uint8Array(item.info.mimg.data);  // Buffer 데이터를 Uint8Array로 변환
            const blob = new Blob([uint8Array]);
            const reader = new FileReader();
    
            reader.onloadend = () => {
                setImageSrc(reader.result);  // Base64 URL로 변환된 이미지 저장
            };
    
            reader.readAsDataURL(blob);
        }
    }, []);
    
    const [isPopupOpen, setIsPopupOpen] = useState(false);  // 팝업 상태

    const handleMoveClick = () => {
        setIsPopupOpen(true);
    };

    // 팝업을 닫기 위한 함수
    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="current-my-music" key={item.info.mid}>
            <div className="current-song-item">
                {imageSrc ? (
                    <img src={imageSrc} className='current-song-image' alt={item.info.title} />
                ) : (
                    <p className='current-song-image'>이미지 없음</p>
                )}
                <div className="current-song-info">
                    <div className="current-song-detail">
                        <span className="current-song-title">{item.info.title}</span>
                        <span className="current-song-writer">{item.info.artist}</span>
                    </div>
                    <span className="current-song-duration">{item.info.duration}</span>
                </div>
            </div>
            <img src={isDarkMode ? '/img/move2.png' : '/img/move.png'} className='thumbs-views' onClick={handleMoveClick} />
            <img src='./img/delete.png' className='thumbs-views' onClick={() => onRemove(item)} />

            {/* 팝업이 열려 있을 때만 팝업 표시 */}
            {isPopupOpen && <Popup onClose={closePopup} />}
        </div>
    )
}

function CurrentItem({ item, onRemove, isDarkMode }) {
    const listItems = item.map(item=>(<CurrentItemCon item={item} onRemove={onRemove} key={item.index}/>))
    return(<>{listItems}</>)
}
function CurrentList({ item, onRemove, isDarkMode }) {
    console.log(item)
    return (<>{<CurrentItem item={item}  onRemove={onRemove} isDarkMode={isDarkMode}/>}</>)
}


export default CurrentList;





function Popup({ onClose }) {
    const [album,setAlbum]=useState([])
    let user=JSON.parse(sessionStorage.getItem('idKey'))
    useEffect(()=>{
        axios.post("http://localhost:3000/api/mymusic/album",{
            uid:user.ID
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setAlbum([...album,obj]);
        });
    },[]);
    return ReactDOM.createPortal(
        <div className="popup">
            <div className="popup-content">
                <h3>플레이리스트</h3>
                <select>
                    <option value=""></option>
                    {<OptionList item={album}/>}
                </select>
                <button onClick={onClose} className="confirm">추가</button>
                <button onClick={onClose} className="cancel">취소</button>
            </div>
        </div>,
        document.body
    );
}