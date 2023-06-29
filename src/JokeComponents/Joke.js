import React from "react";

function Joke(joke){

    return(
        <div className="joke-container">
            <h4>{joke.count}</h4>
            <h5>{joke.setup}</h5>
            <ul>
                <li>{joke.punchline}</li>
            </ul>
        </div>
    )
}

export default Joke