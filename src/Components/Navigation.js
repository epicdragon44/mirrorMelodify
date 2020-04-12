import React from "react";
import { NavLink } from "react-router-dom";
function Navigation () {
    return (
        <nav>
            <ul>
                <li className="left"><img src="https://live.staticflickr.com/65535/49761891423_a0ddd4d48e_b.jpg"
                                          alt="Melodify Logo" className="logo-img"/></li>
                <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
                <li><NavLink to="/AboutUs">About Us</NavLink></li>
                <li><NavLink to="/Research">Research</NavLink></li>
                <li><NavLink to="/MusicGenerator">Music Generator</NavLink></li>
                <li><NavLink to="/" exact>Home</NavLink></li>

            </ul>
        </nav>
    );
}

export default Navigation;