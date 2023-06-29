import React from "react";
import star from '../images/Red_star.png'

function Card(data){
    
    return(
        <div className="card-container">
            <img className="card-img" src={data.images} alt="Logo 1"/>
            <div className="card-status">
                <img className="card-icon" src={star} alt="Star logo"/>
                <span>5.0</span>
                <span className="gray">({data.rating})</span>
                <span className="gray">{data.country}</span>
            </div>
            <p className="bold">{data.header}</p>
            <p>Testing Card Stats</p>

            
        </div>
    )
}

export default Card