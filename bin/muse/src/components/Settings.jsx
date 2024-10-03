import React from 'react';
import ReactDOM from 'react-dom';
import './css/Settings.css';

const Settings = ({ isOpen, setIsOpen }) => {

    // Settings 패널을 숨기는 함수
    const hideSettings = () => {
        setIsOpen(false); // Settings를 숨김
    };

    return ReactDOM.createPortal(
        <div className={`settings-panel ${isOpen ? 'open' : ''}`}>
            <div className="settings-header">
            <img src="/img/back.png" alt="Back" className="back" onClick={hideSettings} />
                <h2>Settings</h2>
            </div>
            <div className="settings-item">
                <span>다크 모드</span>
                <div className="toggle-switch">
                    <label className="switch">
                        <input type="checkbox" />
                        <span></span>
                    </label>
                </div>
            </div>
            <div className="settings-item">
                <span>시청 기록 관리</span>
            </div>
            <div className="settings-item">
                <span>시청 기록 일시중지</span>
                <div className="toggle-switch">
                    <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span></span>
                    </label>
                </div>
            </div>
            <div className="settings-item">
                <span>검색 기록 일시중지</span>
                <div className="toggle-switch">
                    <label className="switch">
                        <input type="checkbox" />
                        <span></span>
                    </label>
                </div>
            </div>
            <div className="settings-item">
                <span>Project 정보</span>
            </div>
        </div>,
        document.body
    );
};

export default Settings;
