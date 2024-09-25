import React from 'react';
import ReactDOM from 'react-dom';
import './css/Detail.css';

const Detail = ({ isOpen }) => {

    return ReactDOM.createPortal(
        <div className={`detail-panel ${isOpen ? 'open' : ''}`}>
            {/* 곡 제목 */}
            <h1 className="title">Collide - Hellberg & Deutgen vs Splitbreed (Astronaut & Barely Alive Remix)</h1>

            {/* 상단 영역: 앨범 이미지와 정보 */}
            <div className="info-section">
                <img src="/img/Collide.png" alt="Album Art" className="song-cover" />
                <div className="detail-info">
                    <div>
                        <span><strong>Uploader</strong></span>
                        <span>Hellberg, Deutgen, Splitbreed</span>
                    </div>
                    <div>
                        <span><strong>Producer</strong></span>
                        <span>Astronaut, Barely Alive</span>
                    </div>
                    <div>
                        <span><strong>Album</strong></span>
                        <span>Collide - The Remixes</span>
                    </div>
                    <div>
                        <span><strong>Copyright</strong></span>
                        <span>Monstercat</span>
                    </div>
                </div>
            </div>

            {/* 중간 영역: 가사 및 댓글 */}
            <div className="content-section">
                {/* 가사 */}
                <div className="contents">
                    <h2>Lyrics</h2>
                    <div className="lyrics-section">
                        [Intro]<br/>
                        (Missile directed to the heart)<br/>
                        You are my star<br/>
                        We are connected, missile directed to the heart, yeah<br/>
                        <br/>
                        [Verse 1]<br/>
                        You draw me near<br/>
                        And I can't slow down, no<br/>
                        Can you feel it too?<br/>
                        There ain't no stopping now<br/>
                        Feet off the ground, head to the sky<br/>
                        Yeah, wind by my side<br/>
                        You're in my vision, directly we collide<br/>
                        <br/>
                        [Pre-Chorus]<br/>
                        You pull me in, I don't resist<br/>
                        The time seems to fly, but the clock doesn't tick<br/>
                        I crash into you, we both feel the hit<br/>
                        We both feel the way that our chemicals mix<br/>
                        And I wish that<br/>
                        I, just keep my eyes shut<br/>
                        Maybe this time it'll be enough<br/>
                        Ooh<br/>
                        <br/>
                        [Chorus]<br/>
                        You own the night<br/>
                        So I need the dark<br/>
                        Without you here, I wouldn't ever see the stars<br/>
                        I'm headed for you<br/>
                        Foot on the gas<br/>
                        I'm coming straight at you, no looking back<br/>
                        Ooh woooaaah<br/>
                        You are my star<br/>
                        We are connected, missile directed to the heart<br/>
                        You are my star<br/>
                        We are connected, missile directed to the heart, yeah<br/>
                        Then we collide<br/>
                        [Instrumentals]<br/>
                        <br/>
                        [Verse 2]<br/>
                        I'm here<br/>
                        I'm your statue<br/>
                        Your heart is a magnet, I'm coming at you<br/>
                        Girl, you're my target I'm aiming at you<br/>
                        You're a comet, I'm trying to catch you<br/>
                        You can break any rule they ever taught you<br/>
                        Forget about anything they ever bought you<br/>
                        'Cause me and you, don't need a lot in this world to get by<br/>
                        Plus, you know I've got you<br/>
                        <br/>
                        [Pre-Chorus]<br/>
                        You pull me in, I don't resist<br/>
                        The time seems to fly, but the clock doesn't tick<br/>
                        I crash into you, we both feel the hit<br/>
                        We both feel the way that our chemicals mix<br/>
                        And I wish that<br/>
                        I, just keep my eyes shut<br/>
                        Maybe, this time it'll be enough<br/>
                        Ooh<br/>
                        <br/>
                        [Chorus]<br/>
                        You own the night<br/>
                        So I need the dark<br/>
                        Without you here, I wouldn't ever see the stars<br/>
                        I'm headed for you<br/>
                        Foot on the gas<br/>
                        I'm coming straight at you, no looking back<br/>
                        Ooh wooooaaah<br/>
                        You are my star<br/>
                        We are connected, missile directed to the heart<br/>
                        You are my star<br/>
                        We are connected, missile directed to the heart, yeah<br/>
                        Then we collide<br/>
                        [Instrumentals]<br/>
                        <br/>
                        [Chorus]<br/>
                        Ooh woooaaah<br/>
                        You are my star<br/>
                        We are connected, missile directed to the heart, yeah<br/>
                        You are my star<br/>
                        We are connected, missile directed to the heart<br/>
                        Then we collide<br/>
                        You are my star<br/>
                        We are connected, missile directed to the heart, yeah<br/>
                        You are my star<br/>
                        We are connected, missile directed, missile directed<br/>
                        Then we collide<br/>
                        <br/>
                        [Outro]<br/>
                    </div>
                </div>
                {/* 댓글 */}

                <div className="contents">
                    <h2>Comments</h2>
                    <div className="comment">
                        <input type="text" placeholder="Add a comment..." />
                        <img src="img/comment.png" alt="Comment-Button" className="comment-button" onClick={() => console.log('Comment-Button clicked')} />
                    </div>
                    <div className="comments-sector">
                        <p><strong>writer1</strong><br />1:27 was great</p>
                        <p><strong>신 창 섭</strong><br />이 또한 신창섭의 은혜겠지요</p>
                        <p><strong>대 상 혁</strong><br />젠장 또 대상혁이야 나는 그를 숭배해야만 해</p>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Detail;
