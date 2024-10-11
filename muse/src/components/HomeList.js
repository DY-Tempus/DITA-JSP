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
            <div className="album-item">
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

    return (
        <div key={item.id} className="album-item" onClick={itemClickEvent}>
            <div className="album-cover-container">
                    {imageSrc ? (
                        <img src={imageSrc} className='album-img' alt={item.name} />
                    ) : (
                        <p className='album-img'>이미지 없음</p>
                    )}
            </div>
            <p className="album-title">{item.MNAME}</p>
        </div>
    );
}
function TrackItemCon({item,mid}){
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
        <li key={item.ID} onClick={itemClickEvent}>
        {imageSrc ? (
            <img src={imageSrc} alt={item.title} className="artist-track-image" />
        ) : (
            <p className="artist-track-image">이미지 없음</p>
        )}
        <span className="artist-track-title">{item.MNAME}</span>
        <span className="artist-track-duration">{item.duration}</span>
        </li>
    )
}
function AlbumTrackItemCon({item,mid}){
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
        <div className="album-music" key={item.MID} onClick={itemClickEvent}>
            <div className="album-song-item">
            {imageSrc ? (
                <img src={imageSrc} alt={item.MNAME} className="album-song-image" />
                ) : (
                    <p className="album-song-image">이미지 없음</p>
                )}
                <div className="album-song-info">
                    <div className="album-song-detail">
                        <span className="album-song-title">{item.MNAME}</span>
                        <span className="album-song-writer">{item.ID}</span>
                    </div>
                    <span className="album-song-duration">{/*재생시간 */}</span>
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
function TrackItem({ item,mid }) {
    const listItems = item.map(item=>(<TrackItemCon item={item} mid={mid} key={item.MID}/>))
    return(<>{listItems}</>)
}
function AlbumTrackItem({ item,mid }) {
    const listItems = item.map(item=>(<AlbumTrackItemCon item={item} mid={mid} key={item.MID}/>))
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
function TrackList({item,mid}){
    return(<>{item.map(item=>(<TrackItem item={item} mid={mid}/>))}</>)
}
function AlbumTrackList({item,mid}){
    return(<>{item.map(item=>(<AlbumTrackItem item={item} mid={mid}/>))}</>)
}


export {
    AlbumList,
    ArtistList,
    MusicList,
    TrackList,
    AlbumTrackList
}