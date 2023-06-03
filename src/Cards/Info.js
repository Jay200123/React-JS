import React from "react";
import Button from "./Buttons";
import About from "./About";
import Interest from "./Interest";

function Info(){

    return(
        <div className="info-container">
            <h1 className="info-title">Renyel Jay Sioc</h1>
            <h5 className="info-detail">BSIT Student</h5>
            <p className="info-small">renyeljay.website</p>
            <Button/>
            <About/>
            <Interest/>
        </div>
    )
}

export default Info