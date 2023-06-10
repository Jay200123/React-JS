import React from "react";
import Profile from "./profile";
import Info from "./Info";
import Footer from "./Footer";

function Page(){
    return(
        <div className="card-container">
            <Profile/>

            <Info
            fullname = 'Renyel Jay Sioc'
            course = "Bachelor of Science in Information Technology"
            section = 'BSIT-NS-3A'
            website  = 'renyeljay.web'
            />

            <Footer/>
        </div>
    )
}

export default Page