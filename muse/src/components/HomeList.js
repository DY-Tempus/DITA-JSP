import React from "react";
import { Link } from 'react-router-dom';

function AlbumItem({item}){
    const listItems = item.map((item) =>
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
    );
    return(
        <>{listItems}</>
    )
}
function ArtistItem({item}){
    
    const listItems = item.map((item) =>
    	<Link to={`/artist/${item.ID}`}>
            <div className="album-item">
                <div className="album-cover-container">
                    <img src={item.img} alt="Artist Image" className="artist-image-home" />
                </div>
                <p className="album-title">{item.name}</p>
            </div>
        </Link>
    );
    return(
        <>{listItems}</>
    )
}
function MusicItem({item}){
    const listItems = item.map((item) =>
    	<div key={item.id} className="album-item">
            <div className="album-cover-container">
            <Link to="/music">
                <img src={item.img} className='album-img'></img>
            </Link>
            </div>
            <p className="album-title">{item.name}</p>
        </div>
    );
    return(
        <>{listItems}</>
    )
}
function TrackItem({ item }) {
    const listItems = item.map((item) =>
    	<li key={item.id}>
        <img src={item.image} alt={item.title} className="artist-track-image" />
        <span className="artist-track-title">{item.title}</span>
        <span className="artist-track-duration">{item.duration}</span>
      </li>
    );
    return (
        <>{listItems}</>
    )
}
function AlbumTrackItem({ item }) {
    const listItems = item.map((item) =>
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
    );
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