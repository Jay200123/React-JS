import React from "react";
import Profile from "./profile";
import Info from "./Info";
import Footer from "./Footer";

function Page(){
    return(
        <div className="card-container">
            <Profile/>
            <Info/>
            <Footer/>
        </div>
    )
}

export default Page