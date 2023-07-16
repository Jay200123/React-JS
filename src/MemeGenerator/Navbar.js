import React from "react";
import icon from "../images/meme-nav.png"

function Navbar(){

    function doSomething(){
        console.log("Hello there!")
    }

    return(
        <nav className="meme-nav">
            <img className="nav-img" src={icon} onMouseMove={doSomething} alt="Meme Smiley Face"/>
            <h3 className="nav-header">Meme Generator</h3>
            <h4 className="header-right">React Course - Project 3</h4>
        </nav>
    )
}

export default Navbar