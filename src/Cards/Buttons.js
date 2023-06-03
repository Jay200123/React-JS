import React from "react";

function Button(){

    return(
        <div className="info-buttons">
            <button className="btn-email"><i className="fa fa-envelope" aria-hidden="true"></i>Email</button>
            <button className="btn-link"><i className="fa fa-linkedin-square" aria-hidden="true"></i>LinkedIn</button>
        </div>
    )
}

export default Button