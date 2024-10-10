import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './css/Album.css'; // CSS 파일 연결
import {AlbumTrackList} from './HomeList'
import axios from 'axios';
const songs = [
    {
        id: 1,
        writer: "Getsix",
        title: "WIP That'll Never Come Out",
        duration: "2:48",
        image: "./img/Getsixart1.png", // 각 곡의 이미지 경로
    },
    {
        id: 2,
        writer: "Getsix",
        title: "The Psychedelic Experience",
        duration: "4:35",
        image: "./img/Getsixart2.png",
    },
    {
        id: 3,
        writer: "Getsix",
        title: "Astral Projection",
        duration: "5:53",
        image: "./img/Getsixart2.png",
    },
    {
        id: 4,
        writer: "Getsix",
        title: "Better Days",
        duration: "4:17",
        image: "./img/Getsixart2.png",
    },
    {
        id: 5,
        writer: "Getsix",
        title: "Envy",
        duration: "3:35",
        image: "./img/Getsixart2.png",
    },
    {
        id: 6,
        writer: "Getsix",
        title: "Diphenhydramine",
        duration: "1:57",
        image: "./img/Getsixart2.png",
    },
];

const Recent = () => {
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
                    <AlbumTrackList item={musics} />
                }
                </>
                </div>
            </div>
        </div>
    );
};

export default Recent;
