import React from 'react';
import './css/Artist.css';

// 트랙 데이터 선언
const tracks = [
  {
    id: 1,
    title: "WIP That'll Never Come Out",
    duration: "2:48",
    image: "/img/getsixart1.png"
  },
  // 추가 트랙 데이터들
  {
    id: 2,
    title: "The Psychedelic Experience",
    duration: "4:35",
    image: "/img/getsixart1.png"
  },
  {
    id: 3,
    title: "Astral Projection",
    duration: "5:53",
    image: "/img/getsixart1.png"
  },
  // 다른 트랙도 여기에 추가 가능
];

const Artist = () => {
  return (
    <div className="artist-artist-page">
      {/* 아티스트 정보 */}
      <div className="artist-artist-info">
        <img src="/img/getsix.png" alt="Artist" className="artist-artist-image" />
        <div className="artist-artist-details">
          <div className="artist-social-icons">
            <h1>Getsix</h1>
            <img src="/img/YouTubeLogo.png" alt="YouTube" />
            <img src="/img/XLogo.png" alt="Twitter" />
          </div>
          <p>7,603 Subs</p>
          <button className="artist-subscribe-btn">Subscribe</button>
        </div>
      </div>

      {/* 트랙 리스트 */}
      <div className="artist-tracklist">
        <h2>
          <select id="sort" name="artist-sort">
            <option value="Recent">Recent</option>
            <option value="View">View</option>
            <option value="Comment">Comment</option>
            <option value="Date">Date</option>
          </select>
        </h2>
        <ul>
          {tracks.map((track) => (
            <li key={track.id}>
              <img src={track.image} alt={track.title} className="artist-track-image" />
              <span className="artist-track-title">{track.title}</span>
              <span className="artist-track-duration">{track.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Artist;
