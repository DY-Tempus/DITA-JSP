import React, { useEffect, useState } from 'react';
import './css/Home.css';

import {AlbumList,ArtistList, MusicList} from './HomeList';
import axios from 'axios';


const Search = ({ isDarkMode, setIsDarkMode }) => {
    const [recent, setRecent]=useState([])
    const [preferMusic,setPreferMusic]=useState([])
    const [preferArtist,setPreferArtist]=useState([])
    const [perferAlbum,setPerferAlbum]=useState([])

    useEffect(()=>{
        let user=JSON.parse(sessionStorage.getItem('idKey'))
        

        axios.post("http://113.198.238.115:3000/api/home/recent")
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setRecent([...recent,obj]);
        });

        axios.post("http://113.198.238.115:3000/api/home/prefermusic",{
            uid:user.ID
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setPreferMusic([...preferMusic,obj]);
        });

        axios.post("http://113.198.238.115:3000/api/home/preferartist",{
            uid:user.ID
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setPreferArtist([...preferArtist,obj]);
        });

        axios.post("http://113.198.238.115:3000/api/home/preferalbum",{
            uid:user.ID
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setPerferAlbum([obj]);
        });
    }, []);

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
                    <h2 className="section-title"></h2>
                    <div className="album-container">
                        
                        <>
                            {
                                <MusicList item={recent}/>
                            }
                        </>
                    </div>
                </section>

                {/*스크롤 시험용 */}
                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">앨범</h2>
                    <div className="album-container">
                    <>
                            {
                                <MusicList item={preferMusic}/>
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
                            <ArtistList item={preferArtist}/>
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
                            <AlbumList item={perferAlbum}/>
                        }
                        </>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Search;
