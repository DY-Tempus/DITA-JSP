import React, { useState } from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Header = ({ setIsCurrentOpen,setSearchText }) => {
    const [text,setText]=useState(null);
    const navigate = useNavigate()
    function signOut(){
        sessionStorage.removeItem("idKey")
        navigate("/signin")
    }
    const searchEvent=()=>{
        setSearchText(text)
    }
    const checkHandled = ({target}) => {
        setText(target.value)
    }
    return (
        <div>
            {/* 상단 배너 */}
            <header className="top-banner">
                <Link to="/home">
                    <img src={require(`./logo.png`)} className="logo"/>
                </Link>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." onChange={checkHandled}/>
                    <img src="/img/search.png" alt="Search" className='search-icon' onClick={() => searchEvent()}/>
                </div>
                <button onClick={signOut} className="sign-out">Sign Out</button>
            </header>
        </div>
    );
};

export default Header;