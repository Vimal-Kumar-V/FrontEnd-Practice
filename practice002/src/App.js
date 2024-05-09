import "./App.css";
import React from "react";

function Facts() {
  return (
    <div className="facts">
    <h1> I am Devil</h1>
    <ul>
      <li>Was Released in 2013</li>
      <li>Was created by Jordan Wlake</li>
      <li>Has over astonishing 100k starts on github</li>
      <li>Was Maintained by FaceBook</li>
      <li>Empowering many enterprise apps including mobile apps </li>
    </ul></div>
  )
}

function Header({mode, setMode}){
  console.log("*****", mode);
  return (
    <header>
      <nav className="header-nav">
        <div className="header-left">
          <img src="/logo192.png" width="40%"/>
          <h3>React Factsss {mode}</h3>
        </div>
        <label className="toggler">
          <input type="checkbox" onClick={setMode} clicked={mode.toString()}/>
          <span className="slider"></span>
        </label>
      </nav>
    </header>
  )
}

function Footer(){
  return (
    <footer>{String.fromCodePoint(0x000A9)} Development rights reserved</footer>
  )
}

export default function App(){
  const [mode, setMode] = React.useState(true);

  let handleToggle = () => {
    console.log(mode);
    setMode(!mode);
  
  }
  
  return (
    <div className={mode? "dark": "light"}>
      <Header mode={mode} setMode={handleToggle}/>
      <Facts />
    </div>
  )
  }
