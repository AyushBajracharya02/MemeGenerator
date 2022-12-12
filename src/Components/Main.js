import React from "react";
import '../Styles/Main.css';
import InputSection from './InputSection';
import imagedata from '../Data/MemeData';
import Meme from './Meme';

export default function Main({props}) {
    const [meme, setMeme] = React.useState({
        toptext: "Haandim",
        bottomtext: "Talai",
        image: getMemeURL()
    });
    function changeMeme(e) {
        setMeme((prevMeme) =>{
            return {
                ...prevMeme,
                [e.target.name]: e.target.name === "image" ? getMemeURL() : e.target.value
            }
        })
    }
    function getMemeURL(){
        const memes = imagedata.data.memes;
        let randomindex = Math.floor(Math.random() * memes.length);
        let newURL = memes[randomindex].url;
        return newURL;
    }
    return (
        <main>
            <InputSection toptext={meme.toptext} bottomtext={meme.bottomtext} handleChange={changeMeme}/>
            <Meme meme={meme}/>
        </main>
    )
}