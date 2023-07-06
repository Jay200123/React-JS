import React from "react";

function JournalCard(journal){
    console.log(journal)
    return(
        <div className="card-container">

            <img  className="card-img" src={journal.image} alt="Mount Fuji"/>

            <div className="card-information">

                <div className="card-location">
                 <img className="location-icon" src={journal.imgLoc} alt="Location"/><h3>{journal.location}</h3><p className="link-location"></p>
                 <p className="link-location">{journal.gmap}</p>
                </div>

             <h2 className="card-title">{journal.title}</h2>
             <h5 className="text-date">{journal.startDate} - { journal.endDate}</h5>
             <p className="card-info">{journal.description}</p>

            </div>

        </div>
    )
}

export default JournalCard