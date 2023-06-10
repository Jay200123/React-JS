import React from "react";
import Button from "./Buttons";
import About from "./About";
import Interest from "./Interest";

function Info(data){
    console.log(data)
    return(
        <div className="info-container">
            <h1 className="info-title">{data.fullname}</h1>
            <h5 className="info-detail">{data.course}, {data.section}</h5>
            <p className="info-small">{data.website}</p>
            <Button/>
            <About/>
            <Interest/>
        </div>
    )
}

export default Info