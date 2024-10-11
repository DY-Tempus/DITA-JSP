import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';





function AlbumItemCon({item}){
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        if (item.AIMG && item.AIMG.data) {
            const uint8Array = new Uint8Array(item.AIMG.data);  // Buffer 데이터를 Uint8Array로 변환
            const blob = new Blob([uint8Array]);
            const reader = new FileReader();
    
            reader.onloadend = () => {
                setImageSrc(reader.result);  // Base64 URL로 변환된 이미지 저장
            };
    
            reader.readAsDataURL(blob);
        }
    }, []);

    return (
        <div key={item.id} className="album-item">
          <div className="album-cover-container">
            <Link to={`/album/${item.ID}/${item.AID}`}>
                {imageSrc ? (
                    <img src={imageSrc} alt="Artist Image" className="album-img" />
                ) : (
                    <p className="album-img">이미지 없음</p>
                )}
                {imageSrc ? (
                    <img src={imageSrc} alt="Artist Image" className="album-img layer-1" />
                ) : (
                    <p className="album-img layer-1"></p>
                )}
                {imageSrc ? (
                    <img src={imageSrc} alt="Artist Image" className="album-img layer-2" />
                ) : (
                    <p className="album-img layer-2"></p>
                )}
                {imageSrc ? (
                    <img src={imageSrc} alt="Artist Image" className="album-img layer-3" />
                ) : (
                    <p className="album-img layer-3"></p>
                )}
            </Link>
          </div>
          <p className="album-title">{item.name}</p>
          <Link to="/updatealbum">
            <img src='./img/edit.png' className='album-edit-icon'/>
            <img src='./img/delete.png' className='album-edit-icon'/>
          </Link>
        </div>
      )
}
function MusicItemCon({item}){
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        if (item.MIMG && item.MIMG.data) {
            const uint8Array = new Uint8Array(item.MIMG.data);  // Buffer 데이터를 Uint8Array로 변환
            const blob = new Blob([uint8Array]);
            const reader = new FileReader();
    
            reader.onloadend = () => {
                setImageSrc(reader.result);  // Base64 URL로 변환된 이미지 저장
            };
    
            reader.readAsDataURL(blob);
        }
    }, []);

    return(
        <div className="my-music" key={item.MID}>
            <div className="song-item">
              <img src={imageSrc} alt={item.MNAME} className="song-image" />
              <div className="song-info">
                <div className="song-detail">
                  <span className="song-title">{item.MNAME}</span>
                  <span className="song-writer">{item.ID}</span>
                </div>
                <div className='align-center'>
                  <span className="song-duration">{item.duration}</span>

                  <Link to="/updatemusic">
                  <img src='./img/edit.png' className='thumbs-views' />
                  <img src='./img/delete.png' className='thumbs-views' />
                  </Link>
                </div>
              </div>
            </div>

        </div>
    )
}







function AlbumItem({ item }) {
    const listItems = item.map(item=>(<AlbumItemCon item={item} key={item.AID}/>))	
    return(<>{listItems}</>)
}
function MusicItem({item}){
    const listItems = item.map(item=>(<MusicItemCon item={item} key={item.MID}/>))	
    return(<>{listItems}</>)
}


function AlbumList({item}){
    return(<>{ item.map(item=>(<AlbumItem item={item}/>)) }</>)
}
function MusicList({item}){
    return(<>{ item.map(item=>(<MusicItem item={item}/>)) }</>)
}

export{
    AlbumList,
    MusicList
}