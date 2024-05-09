import React from "react";

function Header(props){
    return <input type="string" placeholder="hello"
            onInput={props.onInput}/>
}

function Footer({name}){
    return <h1>Hello, My Friend {name}</h1>
}

export default function App(){
    const [name, setName] = React.useState("");

    function changeName(e){
        setName((input) => e.target.value);
    }
    return (<div>
        <Header onInput={changeName}/>
        <Footer name={name}/>
    </div>)
}