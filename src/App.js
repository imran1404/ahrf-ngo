import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import { BrowserRouter as  Router } from 'react-router-dom'
import Slider from './Components/Slider';
import OurMission from './Components/OurMission';
import About from './Components/About';
import Donate from './Components/Donate';
import Countdown from './Components/Countdown';
import Team from './Components/OurTeam/Team';
import BecomeMember from './Components/Become Member/BecomeMember';
import Footer from './Components/Footer/Footer';



const App = () => {
    return (
        <div className="container fluid">
        <Router>
        <Navbar/>
        <Slider/>
        <OurMission/>
        <About/>
        <Countdown/>
        <Donate/>
        <Team/>
        <BecomeMember/>
        <Footer/>
        {/* <Routes>
            {/* <Route path='' element={} /> 
        </Routes> */}
        </Router>
        </div>
    )
}

export default App;
