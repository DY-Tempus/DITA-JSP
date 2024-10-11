import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ReactDOM from 'react-dom';
import {OptionList} from './optionValues'

function CurrentItem({ item, onRemove }) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);  // 팝업 상태

    const handleMoveClick = () => {
        setIsPopupOpen(true);
    };

    // 팝업을 닫기 위한 함수
    const closePopup = () => {
        setIsPopupOpen(false);
    };


    return (
        <div className="current-my-music" key={item.id}>
            <div className="current-song-item">
                <img src={item.image} alt={item.title} className="current-song-image" />
                <div className="current-song-info">
                    <div className="current-song-detail">
                        <span className="current-song-title">{item.title}</span>
                        <span className="current-song-writer">{item.writer}</span>
                    </div>
                    <span className="current-song-duration">{item.duration}</span>
                </div>
            </div>
            <img src='./img/move.png' className='thumbs-views' onClick={handleMoveClick} />
            <img src='./img/delete.png' className='thumbs-views' onClick={() => onRemove(item.index)} />

            {/* 팝업이 열려 있을 때만 팝업 표시 */}
            {isPopupOpen && <Popup onClose={closePopup} />}
        </div>
    )
}

function CurrentList({ item, onRemove }) {
    return (
        <>
            {
                item.map(item => (<CurrentItem item={item} key={item.index} onRemove={onRemove} />))
            }
        </>
    )
}
export default CurrentList;

function Popup({ onClose }) {
    const [album,setAlbum]=useState([])
    let user=JSON.parse(sessionStorage.getItem('idKey'))
    useEffect(()=>{
        axios.post("http://localhost:3000/api/home/myalbum",{
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