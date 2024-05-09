import React from "react"

function Statement(){
    function increment(){
        setCurrNo(oldValue => oldValue + 1)
    }
    function decrement(){
        setCurrNo(oldValue => oldValue - 1);
    }
    const [currNo, setCurrNo]  = React.useState(0)

    let no = 0;
    console.log("Countersss")
    function Count({Counter}){
        console.log(Counter)
       return ( <div>
            <h1>Counter</h1>
            <p>{Counter}</p>
        </div>);
    }
    return (
        <>
        <Count Counter={currNo}/>
        <button display="block" onClick={increment}>  + </button>
        <button onClick={decrement}>  - </button>
        </>
    )
}

export default Statement;