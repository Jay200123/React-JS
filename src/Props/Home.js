import React from "react";
import Page from "./Info";

function Home(){

    return(
        <div className="home-page">
            <h1>React Props</h1>
            <p>In React, the term props stands for properties, which refers to the properties of an object. This is because all elements created in React are JavaScript objects. As a result, passing data into a component is done by creating properties and values for the object.</p>
             <Page
             name='Renyel Jay Sioc'
             course = 'Bachelor of Science in Information Technology'
             section = 'BSIT-NS-3A'
             email = 'renyeljay.sioc@tup.edu.ph'
             />

             <Page
             name='Ian Mark Morga'
             course = 'Bachelor of Science in Information Technology'
             section = 'BSIT-NS-3A'
             email = 'ianmark.morga@tup.edu.ph'
             />

             <Page
             name='Edmon Candido'
             course = 'Bachelor of Science in Information Technology'
             section = 'BSIT-NS-3A'
             email = 'edmon.candido@tup.edu.ph'
             />

             <Page
             name = 'John Neri Escobella'
             course = 'Bachelor of Science in Information Technology'
             section = 'BSIT-NS-3A'
             email='johnneri.escobella@tup.edu.ph'
             />
             
        </div>
    )
}

export default Home