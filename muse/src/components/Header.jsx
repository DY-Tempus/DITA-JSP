import React from 'react';
import './css/Header.css';

const App = () => {
    return (
        <div>
            {/* 상단 배너 */}
            <header className="top-banner">
                <div className="logo">MU:SE</div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <img src="/img/search.png" alt="Search"/>
                </div>
                <button className="sign-out">Sign Out</button>
            </header>
        </div>
    );
};

export default App;