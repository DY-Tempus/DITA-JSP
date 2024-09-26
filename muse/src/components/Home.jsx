import React from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';

const recent_played = [
    { id: 1, img1: './img/Collide.png', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album3.jpg',  name: 'Red Playlist' },
    { id: 2, img1: './img/Collide.png', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album3.jpg',  name: 'Red Playlist' },
    { id: 3, img1: './img/Collide.png', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album3.jpg',  name: 'Red Playlist' },
    { id: 4, img1: './img/Collide.png', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album3.jpg',  name: 'Red Playlist' },
];

const jpop = [
    { id: 1, img1: './img/main_album.jpg', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album2.jpg',  name: 'JPop Playlist' },
    { id: 2, img1: './img/main_album.jpg', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album2.jpg',  name: 'JPop Playlist' },
    { id: 3, img1: './img/main_album.jpg', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album2.jpg',  name: 'JPop Playlist' },
    { id: 4, img1: './img/main_album.jpg', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album2.jpg',  name: 'JPop Playlist' },
    { id: 5, img1: './img/main_album.jpg', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album2.jpg',  name: 'JPop Playlist' },
    { id: 6, img1: './img/main_album.jpg', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album2.jpg',  name: 'JPop Playlist' },
    { id: 7, img1: './img/main_album.jpg', img2: './img/main_album.jpg', img3: './img/main_album2.jpg', img4: './img/main_album2.jpg',  name: 'JPop Playlist' },
];

const Home = () => {
    return (
        <div>
            {/* 메인 콘텐츠 영역 */}
            <main className="main-content">
                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">Recently Played</h2>
                    <div className="album-container">
                        {recent_played.map((recent_played) => (
                            <div key={recent_played.id} className="album-item">
                                <div className="album-cover-container">
                                <Link to="/album">
                                    <img src={recent_played.img4} className='album-img layer-3'></img>
                                    <img src={recent_played.img3} className='album-img layer-2'></img>
                                    <img src={recent_played.img2} className='album-img layer-1'></img>
                                    <img src={recent_played.img1} className='album-img'></img>
                                </Link>
                                </div>
                                <p className="album-title">{recent_played.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/*스크롤 시험용 */}
                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">J-Pop</h2>
                    <div className="album-container">
                        {jpop.map((jpop) => (
                            <div key={jpop.id} className="album-item">
                                <div className="album-cover-container">
                                    <img src={jpop.img4} className='album-img layer-3'></img>
                                    <img src={jpop.img3} className='album-img layer-2'></img>
                                    <img src={jpop.img2} className='album-img layer-1'></img>
                                    <img src={jpop.img1} className='album-img'></img>
                                </div>
                                <p className="album-title">{jpop.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">추천 아티스트</h2>
                    <div className="album-container">
                        {/* 앨범 1 */}
                        <Link to="/artist">
                            <div className="album-item">
                                <div className="album-cover-container">
                                    <img src="/img/getsix.png" alt="Artist Image" className="artist-image-home" />
                                </div>
                                <p className="album-title">Getsix</p>
                            </div>
                        </Link>
                        {/* 앨범 2 */}
                        <div className="album-item">
                            <div className="album-cover-container">
                                <img src="/img/main_album2.jpg" alt="Artist Image" className="artist-image-home" />
                            </div>
                            <p className="album-title">Official髭男dism</p>
                        </div>
                    </div>
                </section>

                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">예시2</h2>
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
