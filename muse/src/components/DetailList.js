import { useEffect, useState } from "react";

function DetailItemCon({ item, comments }) {
    const [imageSrc, setImageSrc] = useState(null);
    const [isLiked, setIsLiked] = useState(false); // 좋아요 상태 관리
  
    useEffect(() => {
      if (item.mimg && item.mimg.data) {
        const uint8Array = new Uint8Array(item.mimg.data);  // Buffer 데이터를 Uint8Array로 변환
        const blob = new Blob([uint8Array]);
        const reader = new FileReader();
  
        reader.onloadend = () => {
          setImageSrc(reader.result);  // Base64 URL로 변환된 이미지 저장
        };
  
        reader.readAsDataURL(blob);
      }
    }, [item]);
  
    // 좋아요 버튼 클릭 시 호출되는 함수
    const handleLikeClick = () => {
      setIsLiked(!isLiked); // 클릭할 때마다 상태를 반전시킴
    };
  
    return (
      <>
        {/* 곡 제목 */}
        <h1 className="detail-panel-title">{item.mname}</h1>
  
        {/* 상단 영역: 앨범 이미지와 정보 */}
        <div className="info-section">
          {imageSrc ? (
            <img src={imageSrc} alt="Album Art" className="song-cover" />
          ) : (
            <p className="album-img">이미지 없음</p>
          )}
          <div className="detail-info">
            <div>
              <span><strong>Artist</strong></span>
              <span>{item.uname}</span>
            </div>
            <div>
              <span><strong>Album</strong></span>
              <span>{item.aname}</span>
            </div>
          </div>
        </div>
  
        {/* 좋아요 & 조회수 */}
        <div className="detail-thumbs-views">
          <img 
            src={isLiked ? "/img/thumbs_click.png" : "/img/thumbs.png"} 
            alt="Thumbs" 
            onClick={handleLikeClick} // 클릭 시 호출
            style={{ cursor: 'pointer' }} // 클릭 가능한 아이콘으로 설정
          />
          <span>34.7K</span>
          <img src="/img/views.png" alt="Views" />
          <span>1.23M</span>
        </div>
  
        {/* 중간 영역: 가사 및 댓글 */}
        <div className="content-section">
          {/* 가사 */}
          <div className="contents">
            <h2>Lyrics</h2>
            <div className="lyrics-section">
              {item.mlyrics}
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
                  <CommentList item={comments} />
                }
              </>
            </div>
          </div>
        </div>
      </>
    );
  }

function CommentItemCon({item}){
    console.log(item)
    return(
        <p><strong>{item.ID}</strong><br/>{item.COMMENT_TEXT}</p>
    )
}





function DetailItem({ item,comments }) {

    const listItems = (<DetailItemCon item={item} comments={comments}/>)
    return(<>{listItems}</>)
}
function CommentItem({ item }) {
    const listItems = item.map(item=>(<CommentItemCon item={item} key={item.CID}/>))
    return(<>{listItems}</>)
}

function DetailList({item,comments}){
    return(<>{ item.map(item=>(<DetailItemCon item={item} comments={comments} key={item.mid}/>)) }</>)
}
function CommentList({item}){
    return(<>{ item.map(item=>(<CommentItem item={item}/>)) }</>)
}

export {
    DetailList,
}