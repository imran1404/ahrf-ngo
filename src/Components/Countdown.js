import React from 'react'
import './Countdown.css';
import CountUp from 'react-countup'


const Countdown = () => {
    return (
        <div className="main-container">
            <h1>Achievement</h1>
            <div className="counter-countainer">
                <i class="fas fa-smile fa-3x counter-logo"></i>
                <div>
                    <CountUp className="countdown" end={150} duration={5} />
                    <span className="counter-name">Project Done</span>
                </div>
            </div>
            <div className="counter-countainer">
                <i class="fas fa-award fa-3x counter-logo"></i>
                <div className="award">
                    <CountUp className="countdown" end={2} duration={5} />
                    <span className="counter-name">Awards</span>
                </div>
            </div>
            <div className="counter-countainer">
                <i class="fas fa-users fa-3x counter-logo"></i>
                <div>
                    <CountUp className="countdown" end={120} duration={5} />
                    <span className="counter-name">Active volunter</span>
                </div>
            </div>

        </div>
    )
}

export default Countdown;
