import React from "react";
import logo from '../images/air-logo.png'

function Navbar(){

    return(
        <nav className="navbar">
            <img className="nav-logo" src={logo} alt="Logo PNG"/>
        </nav>
    )

}

export default Navbar