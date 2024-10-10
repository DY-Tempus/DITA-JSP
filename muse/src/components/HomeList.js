import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function AlbumItemCon({item}){
    return(
        <div key={item.AID} className="album-item">
            <div className="album-cover-container">
            <Link to={`/album/${item.ID}/${item.AID}`}>
                <img src={item.img4} className='album-img layer-3'></img>
                <img src={item.img3} className='album-img layer-2'></img>
                <img src={item.img2} className='album-img layer-1'></img>
                <img src={item.img1} className='album-img'></img>
            </Link>
            </div>
            <p className="album-title">{item.name}</p>
        </div>
    )
}
function ArtistItemCon({item}){
    return(
        <Link to={`/artist/${item.ID}`}>
            <div className="album-item">
                <div className="album-cover-container">
                    <img src={item.img} alt="Artist Image" className="artist-image-home" />
                </div>
                <p className="album-title">{item.name}</p>
            </div>
        </Link>
    )
}
function MusicItemCon({ item }) {
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
    }, [item.MIMG]);

    return (
        <div key={item.id} className="album-item">
            <div className="album-cover-container">
                <Link to="/music">
                    {imageSrc ? (
                        <img src={imageSrc} className='album-img' alt={item.name} />
                    ) : (
                        <p>이미지 없음</p>
                    )}
                </Link>
            </div>
            <p className="album-title">{item.name}</p>
        </div>
    );
}
function TrackItemCon({item}){
    return(
        <li key={item.ID}>
        <img src={item.image} alt={item.title} className="artist-track-image" />
        <span className="artist-track-title">{item.title}</span>
        <span className="artist-track-duration">{item.duration}</span>
        </li>
    )
}
function AlbumTrackItemCon({item}){
    return(
        <div className="album-music" key={item.MID}>
            <div className="album-song-item">
                <img src={item.image} alt={item.MNAME} className="album-song-image" />
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




















function AlbumItem({item}){
    const listItems = item.map(item=>(<AlbumItemCon item={item} key={item.AID}/>))	

    return(
        <>{listItems}</>
    )
}
function ArtistItem({item}){
    const listItems = item.map(item=>(<ArtistItemCon item={item} key={item.ID}/>))	
    return(
        <>{listItems}</>
    )
}
function MusicItem({item}){
    const listItems = item.map(item=>(<MusicItemCon item={item} key={item.MID}/>))	
    return(
        <>{listItems}</>
    )
}
function TrackItem({ item }) {
    const listItems = item.map(item=>(<TrackItemCon item={item} key={item.MID}/>))
    return (
        <>{listItems}</>
    )
}
function AlbumTrackItem({ item }) {
    const listItems = item.map(item=>(<AlbumTrackItemCon item={item} key={item.MID}/>))

    return (
        <>{listItems}</>
    )
}



function AlbumList({item}){
    return(
        <>
        {
            item.map(item=>(<AlbumItem item={item} key={item.AID}/>))
        }
        </>
    )
}
function ArtistList({item}){
    return(
        <>
        {
            item.map(item=>(<ArtistItem item={item} key={item.ID}/>))
        }
        </>
    )
}
function MusicList({item}){
    return(
        <>
        {
            item.map(item=>(<MusicItem item={item} key={item.MID}/>))
        }
        </>
    )
}
function TrackList({item}){
    return(
        <>
        {
            item.map(item=>(<TrackItem item={item} key={item.MID}/>))
        }
        </>
    )
}

function AlbumTrackList({item}){
    return(
        <>
        {
            item.map(item=>(<AlbumTrackItem item={item} key={item.MID}/>))
        }
        </>
    )
}


export {
    AlbumList,
    ArtistList,
    MusicList,
    TrackList,
    AlbumTrackList
}