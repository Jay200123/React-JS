import React from "react";
import reactlogo from "../images/react-icon.jpg"

function Headers(){

    return(
        <nav className="navbar">
            <img className="nav-logo" src={reactlogo} alt="React JS"/>
            <h3>Joke Challenge using React JS!</h3>
        </nav>
    )
}

export default Headers