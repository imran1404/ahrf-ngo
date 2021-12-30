import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import { MenuList } from '../MenuList'


const Footer = () => {

    const menuList = MenuList.map(({id, title }) => {
        return (
            <li>
                <Link className="link-list" to={id} smooth={true} offset={-100} duration={1000}>{title}</Link>
            </li>
        );
    })
    return (
        <div className="main-footer">
            <div className="footer-container">
                <div className="about">
                <Link to="slider" smooth={true} offset={-100} duration={1000} className="navbar-logo"> <span>AHRF</span>-NGO <i className="fas fa-hand-holding-heart logo-icon" ></i></Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eos reprehenderit in dignissimos ipsam aperiam perspiciatis voluptatibus esse, necessitatibus vel.</p>
                <Link className="Slider-btn1 btn1" to="donate" smooth={true} offset={-80} duration={1000} >❤️ Donate Now</Link>
                </div>
                
                <div className="logo">
                
                    <div className="footer-about">
                        <p><i class="fas fa-phone-alt fa-2x"></i><a href="tel:+917001550774"> +91 7001550774 </a></p>
                        <p><i class="fas fa-envelope fa-2x"></i><a href="mailto:ahrfngo@gmail.com"> ahrfngo@gmail.com </a></p>
                        <p><i class="fas fa-map-marker-alt fa-2x"></i><a href="https://g.page/ChandSteel?share"> Rahmat Nagar Road No. 04, Burnpur, Asansol, West Bengal - 713325</a></p>
                    </div>
                </div>
                <div className="pages">
                    <h1>QUICKLINK</h1>
                    <ul>{menuList}</ul>
                </div>
            </div>
            <div className="footer">
                <p className="footer-copy">&copy; Copyright 2021 - Asansol Human Relief Foundation</p>
                <p>Created by ❤️ <a href="https://www.instagram.com/_imran.04/">Imran Khan</a></p>
            </div>
        </div>
    )
}

export default Footer;
