import React, { useEffect, useState } from 'react';
import './css/Sidebar.css';
import Settings from './Settings'; // Settings 컴포넌트 가져오기
import { Link } from 'react-router-dom';
import axios from 'axios';


function Sidebar({ isOpen }) {
    useEffect(() => {
        if (!sessionStorage.getItem("idKey")) return //이거 없으면 창 안떠서 임시로 넣음. 로그인 페이지랑 홈 분리 후에 지울것.
        let obj = sessionStorage.getItem("idKey")
        obj = JSON.parse(obj)
        console.log(obj)
        setUserInfo({
            username: obj.NAME,
            id: obj.ID,
            password: obj.PASSWORD,
            country: 'Korea',
            genre1: obj.GENRE1,
            genre2: obj.GENRE2,
            email: obj.EMAIL,
        });
    }, []);
    // 사용자 정보 상태
    const [userInfo, setUserInfo] = useState({
        username: 'user123',
        id: 'asdf1234',
        password: 'asdf1234',
        country: 'Korea',
        genre1: 'Dubstep',
        genre2: 'EDM',
        email: 'asdfasdf@gmail.com',
    });

    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태 관리
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Settings 패널 상태 관리
    const [isHovered, setIsHovered] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        //버튼 클릭시 사이드바가 나옴

    };

    const closeSidebar = () => {
        setIsSidebarOpen(false); // 사이드바는 닫기
    }

    const openSettings = () => {
        setIsSettingsOpen(true); // Settings를 보이도록 설정
        setIsSidebarOpen(false); // 사이드바는 닫기
    };

    const handleMouseEnter = () => {
        setIsHovered(true); // 마우스를 올리면 상태를 true로 설정
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // 마우스가 나가면 상태를 false로 설정
    };

    const handlePageClick = (e) => {
        // settings-panel을 제외한 영역 클릭 시 설정 닫기
        if (e.target.classList.contains('side-page')) {
            setIsSidebarOpen(false);
        }
    };

    return (
        <div className={`side-page ${isSidebarOpen ? 'open' : ''}`} onClick={handlePageClick}>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}> {/* isOpen 값에 따라 클래스 추가 */}
                <div className="user-info">
                    <img src="./img/getsix.png" alt="User Icon" className="user-icon" />
                    <h2>{userInfo.username}</h2>
                    <h3>My Page</h3>
                </div>
                <ul className="menu">
                    <Link to="/profile" onClick={closeSidebar}><li>● Profile</li></Link>
                    <Link to="/recent" onClick={closeSidebar}><li>● Recently Played</li></Link>
                    <Link to="/favorite" onClick={closeSidebar}><li>● Favorite</li></Link>
                    <Link to="/playlist" onClick={closeSidebar}><li>● My Playlist</li></Link>
                    <Link to="/mymusic" onClick={closeSidebar}><li>● My Music</li></Link>
                    <li
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >● Upload</li>
                    <div className={`additionalOption ${isHovered ? 'visible' : ''}`}>
                        <Link to="/upload" onClick={closeSidebar}>
                            <li className='liElement' onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>- Upload Music</li>
                        </Link>
                        <Link to="/albumupload" onClick={closeSidebar}>
                            <li className='liElement' onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>- Upload Album</li>
                        </Link>
                    </div>
                </ul>
                <div className='Sifoot'>
                    <img src="/img/settings.png" alt="Settings" className="settings-btn"
                        onClick={openSettings} />
                </div>
                <button className='toggle-btn' onClick={toggleSidebar}></button>

                {/* Settings 컴포넌트 */}
                <Settings isOpen={isSettingsOpen} setIsOpen={setIsSettingsOpen} />
            </div>
        </div>
    );
}

export default Sidebar;
