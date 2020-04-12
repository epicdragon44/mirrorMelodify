import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
function Home() {

    return <div className="div">
        <h1 className="header">Hi! Welcome to Melodify.</h1>
        <p className="paragraph">Melodify uses scientifically proven techniques to help you relax.</p>
        <p className="paragraph">Customize your "sound bath," and when you're ready, hit Start.</p>
        <p className="paragraph">Then, close your eyes and relax for 45 minutes.</p>
    </div>;
}
export default Home;