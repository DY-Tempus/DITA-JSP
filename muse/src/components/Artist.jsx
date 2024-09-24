import React from 'react';
import './css/Artist.css';

const Artist = () => {
    return (
        <div className="artist-page">
            {/* 아티스트 정보 */}
            <div className="artist-info">
                <img src="/img/getsix.png" alt="Artist" className="artist-image" />
                <div className="artist-details">
                    <div className="social-icons">
                        <h1>Getsix</h1>
                        <img src="/img/YouTubeLogo.png" alt="YouTube" />
                        <img src="/img/XLogo.png" alt="Twitter" />
                    </div>
                    <p>7,603 Subs</p>
                    <button className="subscribe-btn">Subscribe</button>
                </div>

            </div>

            {/* 트랙 리스트 */}
            <div className="tracklist">
                <h2>
                    <select id="sort" name="fruit">
                        <option value="Recent">Recent</option>
                        <option value="View">View</option>
                        <option value="Comment">Comment</option>
                        <option value="Date">Date</option>
                    </select>
                </h2>
                <ul>
                    <li>
                        <img src="/img/getsixart1.png" alt="Track" className="track-image" />
                        <span className="track-title">WIP That'll Never Come Out</span>
                        <span className="track-duration">2:48</span>
                    </li>
                    <li>
                        <img src="/img/getsixart1.png" alt="Track" className="track-image" />
                        <span className="track-title">WIP That'll Never Come Out</span>
                        <span className="track-duration">2:48</span>
                    </li>
                    <li>
                        <img src="/img/getsixart1.png" alt="Track" className="track-image" />
                        <span className="track-title">WIP That'll Never Come Out</span>
                        <span className="track-duration">2:48</span>
                    </li>
                    <li>
                        <img src="/img/getsixart1.png" alt="Track" className="track-image" />
                        <span className="track-title">WIP That'll Never Come Out</span>
                        <span className="track-duration">2:48</span>
                    </li>
                    <li>
                        <img src="/img/getsixart1.png" alt="Track" className="track-image" />
                        <span className="track-title">WIP That'll Never Come Out</span>
                        <span className="track-duration">2:48</span>
                    </li>
                    <li>
                        <img src="/img/getsixart1.png" alt="Track" className="track-image" />
                        <span className="track-title">WIP That'll Never Come Out</span>
                        <span className="track-duration">2:48</span>
                    </li>
                    <li>
                        <img src="/img/getsixart1.png" alt="Track" className="track-image" />
                        <span className="track-title">WIP That'll Never Come Out</span>
                        <span className="track-duration">2:48</span>
                    </li>
                    <li>
                        <img src="/img/getsixart1.png" alt="Track" className="track-image" />
                        <span className="track-title">WIP That'll Never Come Out</span>
                        <span className="track-duration">2:48</span>
                    </li>
                    <li>
                        <img src="/img/getsixart1.png" alt="Track" className="track-image" />
                        <span className="track-title">WIP That'll Never Come Out</span>
                        <span className="track-duration">2:48</span>
                    </li>
                    <li>
                        <img src="/img/getsixart1.png" alt="Track" className="track-image" />
                        <span className="track-title">WIP That'll Never Come Out</span>
                        <span className="track-duration">2:48</span>
                    </li>
                    {/* 나머지 트랙들도 동일한 방식으로 추가 */}
                </ul>
            </div>
        </div>

    );
};

export default Artist;
