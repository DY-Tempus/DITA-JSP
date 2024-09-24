import React,{useState} from 'react';
import './css/Sidebar.css';

function Sidebar({ isOpen }) {

    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태 관리

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        //버튼 클릭시 사이드바가 나옴

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
                <button className="settings-btn">
                    <img src="/path-to-settings-icon" alt="Settings" />
                </button>
                <button className='toggle-btn' onClick={toggleSidebar}></button>
            </div>
    );
}

export default Sidebar;
