import React from "react";
import { Link } from 'react-router-dom';

function AlbumItem({item}){
    return(
        <div key={item.id} className="album-item">
            <div className="album-cover-container">
            <Link to="/album">
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
function ArtistItem({item}){
    
    return(
        <Link to={`/artist/${item[0].ID}`}>
            <div className="album-item">
                <div className="album-cover-container">
                    <img src={item.img} alt="Artist Image" className="artist-image-home" />
                </div>
                <p className="album-title">{item.name}</p>
            </div>
        </Link>
    )
}
function MusicItem({item}){
    return(
        <div key={item.id} className="album-item">
            <div className="album-cover-container">
            <Link to="/music">
                <img src={item.img} className='album-img'></img>
            </Link>
            </div>
            <p className="album-title">{item.name}</p>
        </div>
    )
}
function TrackItem({ item }) {
    return (
      <li key={item.id}>
        <img src={item.image} alt={item.title} className="artist-track-image" />
        <span className="artist-track-title">{item.title}</span>
        <span className="artist-track-duration">{item.duration}</span>
      </li>
    )
}





function AlbumList({item}){
    return(
        <>
        {
            item.map(item=>(<AlbumItem item={item} key={item.aid}/>))
        }
        </>
    )
}
function ArtistList({item}){
    return(
        <>
        {
            item.map(item=>(<ArtistItem item={item} key={item.id}/>))
        }
        </>
    )
}
function MusicList({item}){
    return(
        <>
        {
            item.map(item=>(<MusicItem item={item} key={item.mid}/>))
        }
        </>
    )
}
function TrackList({item}){
    return(
        <>
        {
            item.map(item=>(<TrackItem item={item} key={item.mid}/>))
        }
        </>
    )
}

export {
    AlbumList,
    ArtistList,
    MusicList,
    TrackList
}