import React from 'react';
import './css/Home.css';

const Home = () => {
    return (
        <div>
            {/* 상단 배너 */}
            <header className="top-banner">
                <div className="logo">Logo</div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>🔍</button>
                </div>
                <button className="sign-out">Sign Out</button>
            </header>

            {/* 메인 콘텐츠 영역 */}
            <main className="main-content">
                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">Recently Played</h2>
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
