import React from "react";
import "./styles.css";

function Home() {
    function handleClick() {
        console.log("Get Started");
    }

    return <div className="div">
        <h1 className="header">Hi! Welcome to Melodify.</h1>
        <p className="paragraph">Melodify uses scientifically proven techniques to help you relax.</p>
        <p className="paragraph">Customize your "sound bath," and when you're ready, hit Start.</p>
        <p className="paragraph">Then, close your eyes and relax for 45 minutes.</p>
        <button onClick={handleClick} className="button">Get Started</button>
    </div>;
}
export default Home;