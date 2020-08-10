import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo.png';
const Header = () => {
    return (
        <header>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li><img src={logo} alt="" /></li>
                    <li><img alt="profile-img" src="https://placeimg.com/40/40/people" /></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;