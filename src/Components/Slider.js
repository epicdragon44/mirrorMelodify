import React from "react";

const [sliderValue, setSliderValue] = React.useState("50");

function updateSlider(event) {
    setSliderValue(event)
}

function Slider() {
    return (
        <div className="slidecontainer">
            <input type="range" min="1" max="100" value={sliderValue} className="slider" id="myRange" onInput={updateSlider}/>
        </div>
    );
}

export default Slider;