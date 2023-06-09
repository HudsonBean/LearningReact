// Coding documentation website test project

import React from "react";

import Typewriter from 'typewriter-effect/dist/core';

// Global Variables
let clickEffectDebounce = false;

let typewriter = new Typewriter('.welcome-section-text', {
  delay: 75,
  loop: true,
  strings: ['Dynamic', 'Efficient', "Back-End"],
  autoStart: true,
});

// Main

const sleep = (ms : number) => new Promise(r => setTimeout(r, ms));

async function clickEffect (event : any) {
  const object = event.target;
  
  if (!clickEffectDebounce) {
    clickEffectDebounce = true;

    object.style.border = "2.5px solid rgb(8, 146, 196)";
    await sleep(100);
    object.style.border = "2.5px solid transparent";

    clickEffectDebounce = false;
  }

}

function NavBar () {
  return (
    <div className="nav-bar" >
      
      <div className="nav-bar-left" >
        <a className="nav-bar-home" href="" > <img src="src/assets/cool.png" alt="Logo" ></img> </a>

        <div className="nav-bar-search" onClick={clickEffect} >
          <img src="src/assets/searching-magnifying-glass.png" ></img>
          <span>Search</span>
        </div>

      </div>



      <div className="nav-bar-right" >
        <a href="" >About Us</a>
        <a href="" >Contact Us</a>
      </div>

    </div>
  );
}

function App () {
  return (
    <>
      <NavBar />
      <div className="welcome-section" >
        <div className="welcome-section-background" ></div>
        <div className="welcome-section-greeting" >
          <img className="welcome-section-logo" src="src/assets/cool.png" ></img>
          <h1 className="welcome-section-text" ></h1>
          <a href="" >Learn More</a>
        </div>
      </div>
      <div>

      </div>
    </>
  );
}

export default App;