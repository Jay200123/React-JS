import React from "react";
import Navbar from  './Navbar'
import Footer from './Footer'

function Content(){

    return(
        <div>
            <Navbar/>
            <div className="container">
            <h1>Reasons why i Love to learn React JS</h1>
            <ul>
                <li>I Want to become a Full Stack Developer</li>
                <li>I Want to Learn MERN Programming</li>
                <li>I Want to Learn More about React JS</li>
            </ul>
        </div>
        <Footer/>
        </div>
    )
}

export default Content