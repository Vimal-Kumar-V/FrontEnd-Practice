import React from "react"

import ReactDOM from "react-dom";

import Card from "./Card";

function Greeting()
{
    const hours = new Date().getHours();
    let greetingMessage = ""
    if (hours < 12 && hours >=6){
        greetingMessage = "Morning"
    }
    else if (hours > 12 && hours < 17){
        greetingMessage = "Afternoon"
    }
    else{
        greetingMessage = "Night"
    }

    return (
        <h1>
            Hello My Friend, Good {greetingMessage}!
        </h1>
    )
}

function DummyFunction(){
    return (
        <h1>
            Hello My Friend
        </h1>
    )
}

ReactDOM.render(<Card />,  document.getElementById("root"));