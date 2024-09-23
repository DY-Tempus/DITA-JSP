import React from 'react';
import './css/Settings.css'; // CSS 파일 import

const Settings = () => {
    return (
        <div className="settings-container">
            <div className="settings-header">
            <img src="/img/back.png" alt="Back" className="back" onClick={() => console.log('Back clicked')} />
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
                <div className="toggle-switch">
                    <label className="switch">
                        <input type="checkbox" />
                        <span></span>
                    </label>
                </div>
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
        </div>
    );
};

export default Settings;
