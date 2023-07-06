import React from "react";
import star from '../images/Red_star.png'

function Card(data){

    console.log(data)

    let badgeText 

    if(data.openSpot === 0){
        badgeText = 'SOLD OUT'
    }else if(data.location){
        badgeText = "ONLINE"
    }
    
    return(
        <div className="card-container">

            {
            badgeText &&<div className="card-badge">{badgeText  }</div>
            } 

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