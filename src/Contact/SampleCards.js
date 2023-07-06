import React from "react";
// import Image from '../images/kitten-test.jpg'


function Cards(data){

    console.log(data)

    return(

        <div className="main-cards">

         <div className="contact-card">
            <img className="contact-img" src={data.image} alt="Kitten"/>

            <div className="info-container">
            <h1>{data.name}</h1>
            <p><i className="fa fa-phone" aria-hidden="true"></i>{data.phone}</p>
            <p><i className="fa fa-envelope" aria-hidden="true"></i>{data.email}</p>

            </div>

         </div>
         
        </div>
        
    )
}

export default Cards