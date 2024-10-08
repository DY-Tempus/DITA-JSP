import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/Settings.css';

const Settings = ({ isOpen, setIsOpen, isDarkMode, setIsDarkMode }) => {

    // Settings 패널을 숨기는 함수
    const hideSettings = () => {
        setIsOpen(false); // Settings를 숨김
    };

    const handlePageClick = (e) => {
        // settings-panel을 제외한 영역 클릭 시 설정 닫기
        if (e.target.classList.contains('settings-page')) {
            setIsOpen(false);
        }
    };

    // 다크 모드 토글 함수
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode); // 다크 모드 상태 반전
    };

    return ReactDOM.createPortal(
        <div className={`settings-page ${isOpen ? 'open' : ''}`} onClick={handlePageClick}>
            <div className={`settings-panel ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className="settings-header">
                <img src="/img/back.png" alt="Back" className="back" onClick={hideSettings} />
                    <h2>Settings</h2>
                </div>
                <div className="settings-item">
                    <span>다크 모드</span>
                    <div className="toggle-switch">
                        <label className="switch">
                        <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
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
            </div>
        </div>,
        document.body
    );
};

export default Settings;
