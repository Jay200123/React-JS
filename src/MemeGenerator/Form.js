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

    const [meme, setMeme] = useState({

        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/m78d.jpg"
    })

    const [memeImage, setMemeImage] = useState(memesData)

    function memeClick(){

        const randomMeme = memeImage.data.memes
        const randomId = Math.floor(Math.random() * randomMeme.length)

        const url = randomMeme[randomId].url
        const name = randomMeme[randomId].name
        
        setMeme(prevMeme=>({...prevMeme, randomImage:url, topText:name, bottomText:name }))
       

    }


    return(
   <main>
    <div className="form-container">
           

                <input className="form-input" type="text" value={meme.topText} placeholder="this is a textbox"/>
                <input className="form-input"  type="text" value={meme.bottomText} placeholder="this is a textbox"/>

                <button className="form-btn" onClick={memeClick}>
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