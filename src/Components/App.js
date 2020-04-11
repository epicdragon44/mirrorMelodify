import React from "react";
import "./styles.css";
import Slider from "./Slider";

function App(){
    function handleClick () {
        console.log("Get Started");
    }
    return <div className="div">
        <nav>
            <ul>
                <li className="left"><img src="https://live.staticflickr.com/65535/49761891423_a0ddd4d48e_b.jpg" alt="Melodify Logo" className="logo-img"/></li>
                <li><a>Contact Us</a></li>
                <li><a>About Us</a></li>
                <li><a>Research</a></li>
                <li><a>Music Generator</a></li>
                <li className="active"><a href="#">Home</a></li>

            </ul>
        </nav>
        <h1 className="header">Hi! Welcome to Melodify.</h1>
        <p className="paragraph">Melodify uses scientifically proven techniques to help you relax.</p>
        <p className="paragraph">Customize your "sound bath," and when you're ready, hit Start.</p>
        <p className="paragraph">Then, close your eyes and relax for 45 minutes.</p>
        <button onClick={handleClick} className="button">Get Started</button>
    </div>;
function App(){
    return (
        <div>
            <header>
                <title>Melödify</title>
            </header>
            <body>
            <div id="centerbox">
                <Slider />
            </div>
            </body>
            <footer>
                <p>Copyright Melödify 2020</p>
            </footer>
        </div>
    );
}

export default App;