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
    axios.post(`http://113.198.238.115:3000/api/artist/user`,{
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

    axios.post(`http://113.198.238.115:3000/api/artist/album`,{
      id:params.id
    })
    .then((Response)=>{
      console.log(Response.data);
      const obj=Response.data;
      console.log(obj)

      setAlbum([...album,obj]);
    });

    axios.post(`http://113.198.238.115:3000/api/artist/track`,{
      id:params.id
    })
    .then((Response)=>{
      console.log(Response.data);
      const obj=Response.data;
      console.log(obj)

      setTrack([...track,obj]);
    });

  }, []);

  const [imageSrc, setImageSrc] = useState(null);
    var user=sessionStorage.getItem("idKey")
    var item=JSON.parse(user)
    
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
        {imageSrc ? (
            <img src={imageSrc} alt="Artist" className="artist-artist-image" />
        ) : (
            <p className="artist-artist-image">이미지 없음</p>
        )}
        <div className="artist-artist-details">
          <div className="artist-social-icons">
            <h1>{artist.aname}</h1>
            <img src="/img/YouTubeLogo.png" alt="YouTube" />
            <img src="/img/XLogo.png" alt="Twitter" />
          </div>
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
