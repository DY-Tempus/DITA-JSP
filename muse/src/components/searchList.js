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

    return(
        <div key={item.AID} className="album-item">
            <div className="album-cover-container">
            <Link to={`/album/${item.ID}/${item.AID}`}>
                {imageSrc ? (
                    <img src={imageSrc} alt="Artist Image" className="album-img" />
                ) : (
                    <p className="album-img">이미지 없음</p>
                )}
                
            </Link>
            </div>
            <p className="album-title">{item.ANAME}</p>
        </div>
    )
}
function ArtistItemCon({item}){
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        if (item.IMG && item.IMG.data) {
            const uint8Array = new Uint8Array(item.IMG.data);  // Buffer 데이터를 Uint8Array로 변환
            const blob = new Blob([uint8Array]);
            const reader = new FileReader();
    
            reader.onloadend = () => {
                setImageSrc(reader.result);  // Base64 URL로 변환된 이미지 저장
            };
    
            reader.readAsDataURL(blob);
        }
    }, []);

    return(
        <Link to={`/artist/${item.ID}`}>
            <div key={item.AID} className="album-item">
                <div className="album-cover-container">
                    {imageSrc ? (
                        <img src={imageSrc} alt="Artist Image" className="artist-image-home" />
                    ) : (
                        <p className="artist-image-home">이미지 없음</p>
                    )}
                </div>
                <p className="album-title">{item.NAME}</p>
            </div>
        </Link>
    )
}
function MusicItemCon({ item,mid }) {
    const [imageSrc, setImageSrc] = useState(null);
    function itemClickEvent(){
        mid(item.MID)
    }
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
        <div className="my-music" key={item.MID} onClick={itemClickEvent}>
            <div className="song-item">
              <img src={imageSrc} alt={item.MNAME} className="song-image" />
              <div className="song-info">
                <div className="song-detail">
                  <span className="song-title">{item.MNAME}</span>
                  <span className="song-writer">{item.ID}</span>
                </div>
                <div className='align-center'>
                  <span className="song-duration">{item.duration}</span>
                </div>
              </div>
            </div>

        </div>
    )
}















//////
function AlbumItem({item}){
    const listItems = item.map(item=>(<AlbumItemCon item={item} key={item.AID}/>))	
    return(<>{listItems}</>)
}
function ArtistItem({item}){
    const listItems = item.map(item=>(<ArtistItemCon item={item} key={item.ID}/>))	
    return(<>{listItems}</>)
}
function MusicItem({item,mid}){
    const listItems = item.map(item=>(<MusicItemCon item={item} mid={mid} key={item.MID}/>))	
    return(<>{listItems}</>)
}


//////
function AlbumList({item}){
    return(<>{ item.map(item=>(<AlbumItem item={item}/>)) }</>)
}
function ArtistList({item}){
    return(<>{item.map(item=>(<ArtistItem item={item}/>))}</>)
}
function MusicList({item,mid}){
    return(<>{item.map(item=>(<MusicItem item={item} mid={mid}/>))}</>)
}


export {
    AlbumList,
    ArtistList,
    MusicList,
}