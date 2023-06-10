import React from "react";


function Page(data){


    return(
            <div className="props-container">
            <h3>{data.name}</h3>
            <ul>
                <li>{data.course}</li>
                <li>{data.section}</li>
                <li>{data.email}</li>
            </ul>
        </div>
    )
}

export default Page