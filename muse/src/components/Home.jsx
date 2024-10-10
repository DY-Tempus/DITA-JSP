import React, { useEffect, useState } from 'react';
import './css/Home.css';

import {AlbumList,ArtistList} from './HomeList';
import axios from 'axios';

const recent_played = [
    { 
        id: 1, 
        img1: './img/Collide.png', 
        img2: './img/main_album.jpg', 
        img3: './img/main_album2.jpg', 
        img4: './img/main_album3.jpg',  
        name: 'Red Playlist' 
    },
    { 
        id: 2, 
        img1: './img/Collide.png', 
        img2: './img/main_album.jpg', 
        img3: './img/main_album2.jpg', 
        img4: './img/main_album3.jpg',  
        name: 'Red Playlist' 
    },
    { 
        id: 3, 
        img1: './img/Collide.png', 
        img2: './img/main_album.jpg', 
        img3: './img/main_album2.jpg', 
        img4: './img/main_album3.jpg',  
        name: 'Red Playlist' 
    },
    { 
        id: 4, 
        img1: './img/Collide.png', 
        img2: './img/main_album.jpg', 
        img3: './img/main_album2.jpg', 
        img4: './img/main_album3.jpg',  
        name: 'Red Playlist' 
    },
];

const jpop = [
    { 
        id: 1, 
        img1: './img/main_album.jpg', 
        img2: './img/main_album.jpg', 
        img3: './img/main_album2.jpg', 
        img4: './img/main_album2.jpg',  
        name: 'JPop Playlist' 
    },
    { 
        id: 2, 
        img1: './img/main_album.jpg', 
        img2: './img/main_album.jpg', 
        img3: './img/main_album2.jpg', 
        img4: './img/main_album2.jpg',  
        name: 'JPop Playlist' 
    },
    { 
        id: 3, 
        img1: './img/main_album.jpg', 
        img2: './img/main_album.jpg', 
        img3: './img/main_album2.jpg', 
        img4: './img/main_album2.jpg',  
        name: 'JPop Playlist' 
    },
    { 
        id: 4, 
        img1: './img/main_album.jpg', 
        img2: './img/main_album.jpg', 
        img3: './img/main_album2.jpg', 
        img4: './img/main_album2.jpg',  
        name: 'JPop Playlist' 
    },
    { 
        id: 5, 
        img1: './img/main_album.jpg', 
        img2: './img/main_album.jpg', 
        img3: './img/main_album2.jpg', 
        img4: './img/main_album2.jpg',  
        name: 'JPop Playlist' 
    },
    { 
        id: 6, 
        img1: './img/main_album.jpg', 
        img2: './img/main_album.jpg', 
        img3: './img/main_album2.jpg', 
        img4: './img/main_album2.jpg',  
        name: 'JPop Playlist' 
    },
    { 
        id: 7, 
        img1: './img/main_album.jpg', 
        img2: './img/main_album.jpg', 
        img3: './img/main_album2.jpg', 
        img4: './img/main_album2.jpg',  
        name: 'JPop Playlist' 
    },
];

const artist=[
    {
        id:1,
        img:'./img/main_album.jpg',
        name:'aaa'
    }
];

const Home = () => {
    const [recent, setRecent]=useState([])
    const [preferMusic,setPreferMusic]=useState([])
    const [preferArtist,setPreferArtist]=useState([])

    useEffect(()=>{
        let user=JSON.parse(sessionStorage.getItem('idKey'))
        

        axios.post("http://localhost:3000/api/home/recent")
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setRecent([...recent,obj]);
        });

        axios.post("http://localhost:3000/api/home/prefermusic",{
            uid:user.ID
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setPreferMusic([...preferMusic,obj]);
        });

        axios.post("http://localhost:3000/api/home/preferartist",{
            uid:user.ID
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setPreferArtist([...preferArtist,obj]);
        });
    }, []);

    // if(!sessionStorage.getItem("idKey")){
    //     return (
    //         <div>
    //             <meta http-equiv="refresh" content="0;url=/signIn"></meta>
    //         </div>
    //     );
    // }

    return (
        <div>
            {/* 메인 콘텐츠 영역 */}
            <main className="main-content">
                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">최신 노래</h2>
                    <div className="album-container">
                        
                        <>
                            {
                                <AlbumList item={recent}/>
                            }
                        </>
                    </div>
                </section>

                {/*스크롤 시험용 */}
                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">선호할 만한 노래</h2>
                    <div className="album-container">
                    <>
                            {
                                <AlbumList item={preferMusic}/>
                            }
                        </>
                    </div>
                </section>

                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">선호할 만한 아티스트</h2>
                    <div className="album-container">
                        {/* 앨범 1 */}
                        <>
                        {
                            <ArtistList item={preferArtist}/>
                        }
                        </>
                    </div>
                </section>

                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">추천 앨범</h2>
                    <div className="album-container">
                        {/* 앨범 1 */}
                        <div className="album-item">
                            <div className="album-cover-container">
                                <img src="/img/main_album.jpg" alt="Main Album Cover" className="album-cover main-cover" />
                                <img src="/img/track1.jpg" alt="Track 1" className="album-cover track-cover" style={{ top: '10px', left: '10px' }} />
                                <img src="/img/track2.jpg" alt="Track 2" className="album-cover track-cover" style={{ top: '20px', left: '20px' }} />
                                <img src="/img/track3.jpg" alt="Track 3" className="album-cover track-cover" style={{ top: '30px', left: '30px' }} />
                            </div>
                            <p className="album-title">HIGEDAN LIVE</p>
                        </div>

                        {/* 앨범 2 */}
                        <div className="album-item">
                            <div className="album-cover-container">
                                <img src="/img/main_album2.jpg" alt="Main Album Cover" className="album-cover main-cover" />
                                <img src="/img/track4.jpg" alt="Track 1" className="album-cover track-cover" style={{ top: '10px', left: '10px' }} />
                                <img src="/img/track5.jpg" alt="Track 2" className="album-cover track-cover" style={{ top: '20px', left: '20px' }} />
                                <img src="/img/track6.jpg" alt="Track 3" className="album-cover track-cover" style={{ top: '30px', left: '30px' }} />
                            </div>
                            <p className="album-title">HIGEDAN 1ST ALBUM</p>
                        </div>

                        {/* 앨범 3 */}
                        <div className="album-item">
                            <div className="album-cover-container">
                                <img src="/img/main_album3.jpg" alt="Main Album Cover" className="album-cover main-cover" />
                                <img src="/img/track7.jpg" alt="Track 1" className="album-cover track-cover" style={{ top: '10px', left: '10px' }} />
                                <img src="/img/track8.jpg" alt="Track 2" className="album-cover track-cover" style={{ top: '20px', left: '20px' }} />
                                <img src="/img/track9.jpg" alt="Track 3" className="album-cover track-cover" style={{ top: '30px', left: '30px' }} />
                            </div>
                            <p className="album-title">HIGEDAN 2ND ALBUM</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
