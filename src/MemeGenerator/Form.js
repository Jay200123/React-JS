import { React, useState } from "react";
import memesData from "../data/meme-data"


function MemeForm(){

   // const [images, setImages] = useState(memesData)
    // console.log(images)

    // function getMemes(){
        // const randomMeme = memesData.data.memes
        // const randomId = Math.floor(Math.random() * randomMeme.length)
        // const url = randomMeme[randomId].url
        // setImages(url)

        // setImages(images =>({
        //     ...images, randomMeme:url
        // }))

    // }

    const[meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1g8my4.jpg"
    })

    const[images, setMemeImages] = useState(memesData)

    function generateMeme(){

        const randomMeme = images.data.memes
        const randomId = Math.floor(Math.random() * randomMeme.length)
        const url = randomMeme[randomId].url

        setMeme(prevImg=>({...prevImg, randomImage:url }))

    }

    return(
   <main>
    <div className="form-container">
           

                <input className="form-input" type="text" placeholder="this is a textbox"/>
                <input className="form-input"  type="text" placeholder="this is a textbox"/>

                <button className="form-btn" onClick={generateMeme}>
                    Get a new meme image
                </button>
                <div className="img-container">
                <img className="meme-img" src={meme.randomImage} alt="Meme"/>
                </div>
        </div>
  </main>
        
    )
}

export default MemeForm