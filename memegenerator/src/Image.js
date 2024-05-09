import React from "react";


export default function MemeImage(props) {
    console.log(1, props);
    return (
        <div className="image">
            <img src={props.url} />
            <h2 className="topText">{props.topText}</h2>
            <h2 className="bottomText">{props.bottomText}</h2>
        </div>
    );

}
