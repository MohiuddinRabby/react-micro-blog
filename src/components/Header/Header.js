import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
const Header = () => {
    return (
        <header>
            <div className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><img src={logo} alt="" /></li>
                    <li>LogoTwo</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;