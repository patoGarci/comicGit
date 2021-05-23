import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Title from './components/Title/Title';
import Img from './components/Img/Img';
import Score from './components/Score/Score';
import './styles/style.css'

function App() {
  const [comic, setComic] = useState(null);
  let number = Math.floor(Math.random() * (614 - 0)) + 0;
  useEffect(()=>{
    axios.get(`https://cors-anywhere.herokuapp.com/https://xkcd.com/${number}/info.0.json`)
      .then(response => setComic(response.data))
      .catch(error => console.log("error", error));
    // console.log("end of useEffect");
  },[])
  // console.log(comic);
  if(!comic){
    return <div>loading---</div>
  }
  return (
    <>
      <Title title = {comic.title}/>
      <Img src={comic.img}/>
      <Score/>
    </>
  );
}

export default App;
