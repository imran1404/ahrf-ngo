import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { MenuList } from './MenuList';
import logo from '../Image/logo.png'

const Navbar = () => {

    const [click, setclick] = useState(false);
    const handleClick = () => {
        return setclick(!click)
    }
    const menuList = MenuList.map(({ id, title, offset }) => {
        return (
            <li>
                <Link id="mobile-navbar" onClick={handleClick} className="link-list" to={id} smooth={true} offset={offset} duration={1000} >{title}</Link>
            </li>
        );
    })



    return (
        <>
            <nav className="navbar" id="navbar">
                
                    <Link to="slider" className="navbar-logo" smooth={true} offset={-100} duration={1000}><img src={logo} alt="AHRF-NGO Logo" height="40px" width="40px" /><p className="logo-name"><span>AHRF</span>-NGO</p></Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times ' : 'fas fa-bars'}></i>
                </div>
                <ul id="ul-mobile" className={click ? "menu-list" : "menu-list close"}>{menuList}</ul>
            </nav>
        </>
    )
}

export default Navbar;
