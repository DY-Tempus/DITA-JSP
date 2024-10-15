import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './css/Album.css'; // CSS 파일 연결
import {AlbumTrackList} from './HomeList'
import axios from 'axios';


const Album = ({mid}) => {
    const params = useParams();
    const [album,setAlbum]=useState({
        asrc:null,
    })
    
    const [imageSrc, setImageSrc] = useState(null);
    const [musics,setMusics]=useState([])
    useEffect(() => {
        if (album.asrc && album.asrc.data) {
            const uint8Array = new Uint8Array(album.asrc.data);  // Buffer 데이터를 Uint8Array로 변환
            const blob = new Blob([uint8Array]);
            const reader = new FileReader();
    
            reader.onloadend = () => {
                setImageSrc(reader.result);  // Base64 URL로 변환된 이미지 저장
            };
    
            reader.readAsDataURL(blob);
        }
    }, [album]);
    useEffect(()=>{
        let id=params.id
        let aid=params.aid
        axios.post("http://113.198.238.115:3000/api/album/detail",{
            id:id,
            aid:aid
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data[0];
            console.log(obj)
            
            setAlbum({
                asrc:obj.AIMG,
            });
        });

        axios.post("http://113.198.238.115:3000/api/album/musics",{
            aid:aid
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setMusics([...musics,obj]);
        });
    }, []);

    if(!sessionStorage.getItem("idKey")){
        return (
            <div>
                <meta http-equiv="refresh" content="0;url=/signIn"></meta>
            </div>
        );
    }
    return (
        <div className="album-page">
            <h1 className="album-section-title">{album.aname}</h1>
            <div className="album-flex-direction-row">
                <img src={imageSrc} className="album-image"/>
                <div className="album-song-list">
                <>
                {
                    <AlbumTrackList item={musics} mid={mid} />
                }
                </>
                </div>
            </div>
        </div>
    );
};

export default Album;
