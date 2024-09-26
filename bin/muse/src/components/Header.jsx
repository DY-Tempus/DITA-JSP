import React from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            {/* 상단 배너 */}
            <header className="top-banner">
                <Link to="/home">
                    <div className="logo">MU:SE</div>
                </Link>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <img src="/img/search.png" alt="Search" className='search-icon'/>
                </div>
                <button className="sign-out">Sign Out</button>
            </header>
        </div>
    );
};

export default App;