import React from 'react'
import './Slider.css'
import { Link } from 'react-scroll'

const Slider = () => {
    return (
        <div className="slider" id="slider">
           <figure>
                <img className="slider-img" src="./images/slider1.jpg" alt="Slider1" />
                <img className="slider-img" src="./images/slider2.jpg" alt="Slider2" />
                <img className="slider-img" src="./images/slider3.jpg" alt="Slider3" />
                </figure>
                <div className="overlay"></div>
                <div className="slider-item">
                    <h1 className="heading">Give a Helping Hand for Poor</h1>
                    <p className="quote">No one is useless in this world who lightens the burdens of another.</p>
                    <Link className="Slider-btn1" to="donate" smooth={true} offset={-70} duration={1000} >❤️ Donate Now</Link>
                    <Link className="Slider-btn2" to="contact" smooth={true} offset={-100} duration={1000} >🤝 Become Member</Link>
                </div>
        </div>
        
    )
}

export default Slider;