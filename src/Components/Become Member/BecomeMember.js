import React, { useState } from 'react'
import './BecomeMember.css'

const BecomeMember = () => {
    return (

        <div className="form-container" id="contact">    
            <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfrF6iRzZwTIYR8tncj_uBPCNikub3Eu80qlXF-RTqt-AiL2w/formResponse" target="_blank" method="post">
                <h1>Join Our Team</h1>
                <div className="form-item">
                <label>Full Name</label>
                <input type="text" name="entry.2005620554" required />
                </div>
                <div className="form-item">
                <label>Mobile Number</label>
                <input type="number" name="entry.566966706" required />
                </div>
                <div className="form-item">
                <label>Address</label>
                <textarea
                type="text" name="entry.1065046570" required ></textarea>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
            
        </div>

    )
}

export default BecomeMember;
