import React  from "react"
import icon from '../images/react-icon.jpg'

function Navbar(){
    return(
        <nav className="navbar">
            <img className="img-header" src={icon}  alt="Icon"/>
            <ul>
                {/* <li><i className="fa fa-database" aria-hidden="true"></i>Pricing</li>
                <li><i className="fa fa-info-circle" aria-hidden="true"></i>About</li>
                <li><i className="fa fa-phone" aria-hidden="true"></i>Contact Us</li> */}
                <li>React Course - Project 1</li>
            </ul>
        </nav>
    )
}

export default Navbar