import React, { useEffect, useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import './css/Artist.css';
import axios from 'axios';
import {AlbumList,TrackList} from './HomeList';

const Artist = ({mid}) => {
  const params = useParams();
  const [artist,setArtist]=useState({
    aname:'',
    aimg:'',
  })
  const [album,setAlbum]=useState([])
  const [track,setTrack]=useState([])

  useEffect(()=>{
    
    console.log(params.id)
    axios.post(`http://localhost:3000/api/artist/user`,{
      id:params.id
    })
    .then((Response)=>{
      console.log(Response.data);
      const obj=Response.data[0];
      console.log(obj)

      setArtist({
        aname:obj.NAME,
        aimg:'',
    });
    });

    axios.post(`http://localhost:3000/api/artist/album`,{
      id:params.id
    })
    .then((Response)=>{
      console.log(Response.data);
      const obj=Response.data;
      console.log(obj)

      setAlbum([...album,obj]);
    });

    axios.post(`http://localhost:3000/api/artist/track`,{
      id:params.id
    })
    .then((Response)=>{
      console.log(Response.data);
      const obj=Response.data;
      console.log(obj)

      setTrack([...track,obj]);
    });

  }, []);

  // if(!sessionStorage.getItem("idKey")){
  //   return (
  //       <div>
  //           <meta http-equiv="refresh" content="0;url=/signIn"></meta>
  //       </div>
  //   );
  // }
  return (
    <div className="artist-artist-page">
      {/* 아티스트 정보 */}
      <div className="artist-artist-info">
        <img src={artist.aimg} alt="Artist" className="artist-artist-image" />
        <div className="artist-artist-details">
          <div className="artist-social-icons">
            <h1>{artist.aname}</h1>
            <img src="/img/YouTubeLogo.png" alt="YouTube" />
            <img src="/img/XLogo.png" alt="Twitter" />
          </div>
          <p>7,603 Subs</p>
          <button className="artist-subscribe-btn">Subscribe</button>
        </div>
      </div>

      {/* 트랙 리스트 */}
      <div className="artist-tracklist">
      <h1 className="artist-section-title">Album</h1>
        <section className="artist-album-section">
          <div className="artist-album-container">

            <>
              {
                <AlbumList item={album} />
              }
            </>
          </div>
        </section>
        <h1 className="artist-section-title">Music</h1>
        <h2>
          <select id="sort" name="artist-sort">
            <option value="Recent">Recent</option>
            <option value="View">View</option>
            <option value="Comment">Comment</option>
            <option value="Date">Date</option>
          </select>
        </h2>
        <ul>
          <>
            {
              <TrackList item={track} mid={mid}/>
            }
          </>
        </ul>
      </div>
    </div>
  );
};

export default Artist;
