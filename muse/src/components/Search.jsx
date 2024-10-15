import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './css/Home.css';

import {AlbumList,ArtistList, MusicList} from './searchList';
import axios from 'axios';


const Search = ({ isDarkMode }) => {
    const params = useParams();
    const [artist, setArtist]=useState([])
    const [album,setAlbum]=useState([])
    const [music,setMusic]=useState([])

    useEffect(()=>{
        var text=params.text

        axios.post("http://113.198.238.115:3000/api/search/name",{
            text:text
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setArtist([...artist,obj]);
        });

        axios.post("http://113.198.238.115:3000/api/search/name",{
            text:text
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setAlbum([...album,obj]);
        });

        axios.post("http://113.198.238.115:3000/api/search/name",{
            text:text
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setMusic([...music,obj]);
        });
    })

    if(!sessionStorage.getItem("idKey")){
        return (
            <div>
                <meta http-equiv="refresh" content="0;url=/signin"></meta>
            </div>
        );
    }

    return (
        <div>
            {/* 메인 콘텐츠 영역 */}
            <main className={`main-content ${isDarkMode ? 'dark-mode' : ''}`}>

                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">앨범</h2>
                    <div className="album-container">
                    <>
                            {
                                <AlbumList item={album}/>
                            }
                        </>
                    </div>
                </section>

                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">아티스트</h2>
                    <div className="album-container">
                        <>
                        {
                            <ArtistList item={artist}/>
                        }
                        </>
                    </div>
                </section>

                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">노래</h2>
                    <div className="album-container">
                        <>
                        {
                            <MusicList item={music}/>
                        }
                        </>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Search;
