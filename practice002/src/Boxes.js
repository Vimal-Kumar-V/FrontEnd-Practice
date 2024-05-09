import React from "react"
import boxdata from "./boxdata"
import "./App.css"

function Box({...props}){
    console.log(props)
    let styles = {
        backgroundColor: props.on?"black": "white",
        color: props.on?"white":"black"
    }

    return  <h1 style={styles} onClick={() => props.function(props._id)}>{props._id}</h1>
}

export default function Boxes(props){

    const [boxes, setBoxData] = React.useState(boxdata)

    function toggle(_id){
        setBoxData ((prevData)=> prevData.map((box) => box._id == _id ? {...box, on: !box.on}: box))
    }

    return boxes.map(box => {
        props = {...box, "key": box._id, "function": toggle};
        console.log(box)
        return <Box {...props} />
    }
    )
   }