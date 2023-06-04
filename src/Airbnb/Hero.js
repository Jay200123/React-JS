import React from "react";
import background from '../images/grid.png'

function Hero(){
    return(
        <section className="hero-container">
            <img className='background-img' src={background} alt="Background Logo"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero