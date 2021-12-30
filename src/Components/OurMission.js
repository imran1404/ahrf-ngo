import React from 'react'
import './OurMission.css'

const OurMission = () => {
    return (
        <div className="mission-container">
            <h1 className="mission-headingg">Our Mission</h1>
            <div className="mission-items">
                <div className="mission1">
                <i class="fas fa-hamburger fa-3x mission-icon"></i>
                    <h2 className="mission-heading">Food Donate</h2>
                    <p className="mission-para">“Donating to the needy not just benefits the recipient, it also benefits the donor in improving the psychological, emotional and spiritual well-being.”</p>
                </div>
                <div className="mission1">
                <i class="fas fa-user-md fa-3x mission-icon"></i>
                    <h2 className="mission-heading">Medical Care</h2>
                    <p className="mission-para">“You don't have to be a doctor to save a lives! You can save lives too by just donating a little amount.”</p>
                </div>
                <div className="mission1">
                    <i class="fas fa-user-graduate fa-3x mission-icon"></i>
                    <h2 className="mission-heading">Education</h2>
                    <p className="mission-para">“Giving a child an education is by far one of the most important investments we can make.”</p>
                </div>
            </div>
        </div>
    )
}

export default OurMission
