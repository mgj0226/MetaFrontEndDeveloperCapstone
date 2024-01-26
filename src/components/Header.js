import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.svg';

const Header = () => {
    const {menuOpen, setMenuOpen} = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className={`header ${menuOpen ? "open":""}`}>
            <a href='/'><img src={Logo} alt="logo" className='logo' /></a>
            <div className='menuIcon'>
                <div className='bar'/>
                <div className='bar'/>
                <div className='bar'/>
            </div>
            <ul className={`navUl ${menuOpen ? "visible":""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/Reservations">Reservations</Link></li>
                <li><Link to="/OrderOnline">Order Online</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Header;