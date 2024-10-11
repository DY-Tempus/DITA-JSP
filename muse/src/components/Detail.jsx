import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/Detail.css';
import axios from 'axios';


function CommentItem({item}){
    return(
        <p><strong>{item.name}</strong><br />{item.content}</p>
    )
}

var comments=[
    {
        id:1,
        name:'aaa',
        content:'뭐야이거',
    }
]
const Detail = ({ isOpen }) => {
    useEffect(()=>{
        axios.get("http://localhost:3000/api/detail",{
            responseType: 'json',
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data[0];
            
            setMusicInfo({
                mid:obj.mid,
                mlyrics:obj.mlyrics,
                mname:obj.mname,
                uname:obj.uname,
                aname:obj.aname,
            });
        });

    }, []);
    const [musicInfo,setMusicInfo]=useState({
        mid:0,
        mlyrics: '',
        mname:'',
        aname:'',
        uname:'',
    });
    
    return ReactDOM.createPortal(
        <div className={`detail-panel ${isOpen ? 'open' : ''}`}>
            {/* 곡 제목 */}
            <h1 className="detail-panel-title">{musicInfo.mname}</h1>

            {/* 상단 영역: 앨범 이미지와 정보 */}
            <div className="info-section">
                <img src="/img/Collide.png" alt="Album Art" className="song-cover" />
                <div className="detail-info">
                    <div>
                        <span><strong>Artist</strong></span>
                        <span>Hellberg, Deutgen, Splitbreed</span>
                    </div>
                    <div>
                        <span><strong>Album</strong></span>
                        <span>{musicInfo.aname}</span>
                    </div>
                </div>
            </div>
            {/* 좋아요 & 조회수 */}
            <div className="detail-thumbs-views">
                <img src="/img/thumbs.png" alt="Thumbs"/>
                <span>34.7K</span>
                <img src="/img/views.png" alt="Views"/>
                <span>1.23M</span>
            </div>

            {/* 중간 영역: 가사 및 댓글 */}
            <div className="content-section">
                {/* 가사 */}
                <div className="contents">
                    <h2>Lyrics</h2>
                    <div className="lyrics-section" >
                        {musicInfo.mlyrics}
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
                    <>
                        {
                            comments.map(
                            item=>(<CommentItem item={item} key={item.id}/>)
                            )
                        }
                    </>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Detail;
