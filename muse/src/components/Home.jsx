import React from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';
function AlbumItem({item}){
    return(
        <div className="album-item">
            <div className="album-cover-container">
                <a href="">
                <img src={require(`../../public/img/${item.imageName}`)} alt="Main Album Cover" className="album-cover main-cover" />
                <img src={require(`../../public/img/${item.imageName}`)} alt="Track 1" className="album-cover track-cover" style={{ top: '10px', left: '10px' }} />
                <img src={require(`../../public/img/${item.imageName}`)} alt="Track 2" className="album-cover track-cover" style={{ top: '20px', left: '20px' }} />
                <img src={require(`../../public/img/${item.imageName}`)} className="album-cover track-cover" style={{ top: '30px', left: '30px' }} />
                </a>
            </div>
            <p className="album-title">{item.albumtitle}</p>
        </div>
    )
}
function ArtistItem({item}){
    return(
        <Link to="/artist">
            <div className="album-item">
                <div className="album-cover-container">
                    <img src={require(`../../public/img/${item.imageName}`)} alt="Artist Image" className="artist-image-home" />
                </div>
                <p className="album-title">{item.name}</p>
            </div>
        </Link>
    )
}

const Home = () => {
    const recently=[
        {
            id:1,
            albumtitle:'이름',
            imageName:'album.jpg',
        },
        {
            id:2,
            albumtitle:'이름2',
            imageName:'album.jpg',
        },
    ];
    const jpop=[
        {
            id:1,
            albumtitle:'이름',
            imageName:'album.jpg',
        },
        {
            id:2,
            albumtitle:'이름2',
            imageName:'album.jpg',
        },
    ];
    const artist=[
        {
            id:1,
            name:'이름',
            imageName:'getsix.png',
        },
        {
            id:2,
            name:'이름2',
            imageName:'getsix.png',
        },
    ];
    return (
        <div>
            {/* 메인 콘텐츠 영역 */}
            <main className="main-content">
                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">Recently Played</h2>
                    <div className="album-container">
                        {/* 앨범 1 */}
                        <>
                            {
                                recently.map(
                                    item=>(<AlbumItem item={item} key={item.id}/>)
                                )
                            }
                        </>
                    </div>
                </section>

                {/*스크롤 시험용 */}
                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">J-Pop</h2>
                    <div className="album-container">
                        {/* 앨범 1 */}
                        <>
                            {
                                jpop.map(
                                    item=>(<AlbumItem item={item} key={item.id}/>)
                                )
                            }
                        </>
                    </div>
                </section>

                {/* 앨범 섹션 예시 */}
                <section className="album-section">
                    <h2 className="section-title">추천 아티스트</h2>
                    <div className="album-container">
                        {/* 앨범 1 */}
                        <>
                            {
                                artist.map(
                                    item=>(<ArtistItem item={item} key={item.id}/>)
                                )
                            }
                        </>
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
