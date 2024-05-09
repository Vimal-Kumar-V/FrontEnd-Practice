import React from "react"
async function fetchMemeData(){
    let response = await fetch("http://localhost:5000");
    let data = await response.json();
    return data;
}

export  function MemeData(){
    const [memes, setMemes] = React.useState({})
    fetchMemeData().then((data) => setMemes(data));
    return memes;
}
