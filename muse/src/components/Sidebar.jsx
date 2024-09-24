import React,{useState} from 'react';
import './css/Sidebar.css';
import Settings from './Settings'; // Settings 컴포넌트 가져오기

function Sidebar({ isOpen }) {

    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태 관리
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Settings 패널 상태 관리

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        //버튼 클릭시 사이드바가 나옴

    };

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
                    <li>Profile</li>
                    <li>Recently Played</li>
                    <li>Favorite</li>
                    <li>My Playlist</li>
                    <li>My Music</li>
                    <li>Upload Music</li>
                </ul>
                <footer>
                    <img src="/img/settings.png" alt="Settings" className="settings-btn" 
                     onClick={openSettings} />
                </footer>
                <button className='toggle-btn' onClick={toggleSidebar}></button>

                {/* Settings 컴포넌트 */}
                <Settings isOpen={isSettingsOpen} setIsOpen={setIsSettingsOpen} />
            </div>
    );
}

export default Sidebar;
