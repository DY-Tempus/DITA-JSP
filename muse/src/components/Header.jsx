import React from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const App = () => {
    const navigate = useNavigate()
    function signOut(){
        sessionStorage.removeItem("idKey")
        navigate("/signin")
    }
    
    return (
        <div>
            {/* 상단 배너 */}
            <header className="top-banner">
                <Link to="/home">
                    <img src="img/logo.png" className="logo"/>
                </Link>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <img src="/img/search.png" alt="Search" className='search-icon'/>
                </div>
                <button onClick={signOut} className="sign-out">Sign Out</button>
            </header>
        </div>
    );
};

export default App;