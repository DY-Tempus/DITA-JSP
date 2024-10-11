import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/Detail.css';
import axios from 'axios';
import {DetailList} from './DetailList';


const Detail = ({ isOpen, setIsOpen, mid, isDarkMode }) => {
    useEffect(()=>{
        axios.post(`http://localhost:3000/api/detail/music`,{
            responseType: 'json',
            mid:mid
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data[0];
            
            setMusicInfo([obj]);

            axios.post(`http://localhost:3000/api/detail/comment`,{
                responseType: 'json',
                mid:mid
            })
            .then((Response)=>{
                console.log(Response.data);
                const obj=Response.data;
                
                setComments([obj]);
            });
        });
        

    }, [mid]);
    const [musicInfo,setMusicInfo]=useState([]);
    const [comments,setComments]=useState([]);
    
    return ReactDOM.createPortal(
        <div className={`detail-panel ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
            <>
                {
                    <DetailList item={musicInfo} comments={comments} isDarkMode={isDarkMode}/>
                }
            </>
        </div>,
        document.body
    );
};

export default Detail;
