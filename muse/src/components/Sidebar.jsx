import React,{useState} from 'react';
import './css/Sidebar.css';
import Settings from './Settings'; // Settings 컴포넌트 가져오기
import { Link } from 'react-router-dom';

function Sidebar({ isOpen }) {

    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태 관리
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Settings 패널 상태 관리

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        //버튼 클릭시 사이드바가 나옴

    };

    const closeSidebar = () =>{
        setIsSidebarOpen(false); // 사이드바는 닫기
    }

    const openSettings = () => {
        setIsSettingsOpen(true); // Settings를 보이도록 설정
        setIsSidebarOpen(false); // 사이드바는 닫기
    };

    return (
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}> {/* isOpen 값에 따라 클래스 추가 */}
                <div className="user-info">
                    <img src="./img/getsix.png" alt="User Icon" className="user-icon" />
                    <h2>User</h2>
                    <h3>My Page</h3>
                </div>
                <ul className="menu">
                    <Link to="/profile" onClick={closeSidebar}><li>● Profile</li></Link>
                    <Link to="/recent" onClick={closeSidebar}><li>● Recently Played</li></Link>
                    <Link to="/favorite" onClick={closeSidebar}><li>● Favorite</li></Link>
                    <Link to="/playlist" onClick={closeSidebar}><li>● My Playlist</li></Link>
                    <li>● My Music</li>
                    <li>● Upload Music</li>
                </ul>
                <div className='Sifoot'>
                    <img src="/img/settings.png" alt="Settings" className="settings-btn" 
                     onClick={openSettings} />
                </div>
                <button className='toggle-btn' onClick={toggleSidebar}></button>

                {/* Settings 컴포넌트 */}
                <Settings isOpen={isSettingsOpen} setIsOpen={setIsSettingsOpen} />
            </div>
    );
}

export default Sidebar;
