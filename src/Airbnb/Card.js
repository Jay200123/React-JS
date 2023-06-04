import React from "react";
import img1 from '../images/bnb1.png'
import star from '../images/Red_star.png'

function Card(){

    return(
        <div className="card-container">
            <img className="card-img" src={img1} alt="Logo 1"/>
            <div className="card-status">
                <img className="card-icon" src={star} alt="Star logo"/>
                <span>5.0</span>
                <span className="gray">(6)</span>
                <span className="gray">Philippines</span>
            </div>
            <p className="bold">Testing Card Stats</p>
            <p>Testing Card Stats</p>
        </div>
    )
}

export default Card