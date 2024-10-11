import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './css/Album.css'; // CSS 파일 연결
import {AlbumTrackList} from './HomeList'
import axios from 'axios';


const Album = ({mid}) => {
    const params = useParams();
    const [album,setAlbum]=useState({
        aname:'',
        asrc:'',
    })
    const [musics,setMusics]=useState([])
    
    useEffect(()=>{
        let id=params.id
        let aid=params.aid
        axios.post("http://localhost:3000/api/album/detail",{
            id:id,
            aid:aid
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data[0];
            console.log(obj)
            
            setAlbum({
                aname:obj.ANAME,
                asrc:''
            });
        });

        axios.post("http://localhost:3000/api/album/musics",{
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
                <img src='./img/main_album2.jpg' className="album-image"/>
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
