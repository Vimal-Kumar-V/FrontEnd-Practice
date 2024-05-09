import './App.css';
import React from "react"
import MemeImage from './Image';


export default function App() {
  async function fetchMemeData(){
    let response = await fetch("http://localhost:5000");
    let data = await response.json();
    return data;
}
  const [allMemes, setAllMemesData] = React.useState({})

  React.useEffect(() => {
    fetchMemeData().then((data) => setAllMemesData(data))
    return () => {}}
    ,[])

  React.useEffect(() => {getRandomImage()}, [allMemes])

const [meme, setMemeData] = React.useState({
    "topText": "",
    "bottomText": "",
    "url": ""
  })

  function updateText(event){
    const {name, value} = event.target;
    setMemeData (prevData => {
      let data = {...prevData, [name]: value};
      return data
    })
  }

  function reloadNewImage(){
    setMemeData(prevData => {
      let data = {...prevData, "url": getRandomImage()}
      return data
    })
  }


  function getRandomImage(){
    if (allMemes === undefined || allMemes.data === undefined){
      return ""
    }
    setMemeData((prevData) => {
    let data = allMemes.data;
    let random_number = Math.floor(Math.random() * data.memes.length);
    let currState = {...prevData, "url": data.memes[random_number].url}
    return currState;
    })
  }
  
  return (
    <div className='App'>
      <div className='navbar'>
          <img src="/images/keems.png" alt="Image"/>
          <h1>Meme Generator</h1>
          <h5>ReactCourse - Project3</h5>
      </div>
      <div className='form-grid-container' >
          <input className='form-grid-container-1' onChange={updateText} name="topText" type='string' placeholder='Meme First half' value={meme.topText}/>
          <input className='form-grid-container-2' onChange={updateText} name="bottomText" type='string' placeholder='Meme Second half' value={meme.bottomText}/>
          <div className='form-grid-container-3' >
          <button onClick={reloadNewImage}> Generate a New Meme Image </button>
          </div>
      </div>
      <MemeImage {...meme}/>
    </div>
  );
}

