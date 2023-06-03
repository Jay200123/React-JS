import React from "react";
import icon from '../images/react-icon.jpg'

function Header(){
   return(
    <nav className="navbar">
        <img className="img-nav" src={icon} alt="react icon"/>
        <h3>React Facts</h3>
        <h4>React Course Solo Project</h4>
    </nav>
    )
}

export default Header