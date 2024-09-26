import React from 'react';
import './css/Detail.css';

const Detail = () => {
    return (
        <div className="detail-container">
            {/* 곡 제목 */}
            <h1 className="title">Collide - Hellberg & Deutgen vs Splitbreed (Astronaut & Barely Alive Remix)</h1>
            
            {/* 상단 영역: 앨범 이미지와 정보 */}
            <div className="info-section">
                <img src="/img/Collide.png" alt="Album Art" className="song-cover" />
                <div className="detail-info">
                    <p><strong>Uploader:</strong> Hellberg, Deutgen, Splitbreed</p>
                    <p><strong>Producer:</strong> Astronaut, Barely Alive</p>
                    <p><strong>Album:</strong> Collide - The Remixes</p>
                    <p><strong>Copyright:</strong> Monstercat</p>
                </div>
            </div>

            {/* 중간 영역: 가사 및 댓글 */}
            <div className="content-section">
                {/* 가사 */}
                <div className="contents">
                    <h2>Lyrics</h2>
                    <div className="lyrics-content">
                        [Intro] <br />
                        (Missile directed to the heart) <br />
                        You are my star <br />
                        We are connected, missile directed to the heart, yeah<br />
                        [Verse 1]<br />
                        You draw me near<br />
                        And I can't slow down, no<br />
                        Can you feel it too?<br />
                        There ain't no stopping now<br />
                        Feet off the ground, head to the sky<br />
                        Yeah, wind by my side<br />
                        You're in my vision, directly we collide<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                        집에가고싶다<br />
                    </div>
                </div>
                {/* 댓글 */}
                
                <div className="contents">
                    <h2>Comments</h2>
                    <div className="comments">
                        <input type="text" placeholder="Add a comment..." />
                        <img src="img/comment.png" alt="Comment-Button" className="comment-button"/>
                    </div>
                    <div className="comments-content">
                        <p>asdf123: 1:27 was great</p>
                        <p>aaaaaaa: Loving this track!</p>
                        <p>히히: 집에못가</p>
                        <p>히히: 집에못가</p>
                        <p>히히: 집에못가</p>
                        <p>히히: 집에못가</p>
                        <p>히히: 집에못가</p>
                        <p>히히: 집에못가</p>
                        <p>히히: 집에못가</p>
                        <p>히히: 집에못가</p>
                        <p>히히: 집에못가</p>
                        <p>히히: 집에못가</p>
                        <p>히히: 집에못가</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Detail;
