import React from "react"

export default function Item(){
    const [items, addItems] = React.useState(["hello"]);

    function addItem(){
        addItems((items) => [...items, `hello${items.length}`])
    }

    const formatted = items.map((item) => <p>{item}</p>)
    
    return (
        <div>
            <button width="100px" height="100px" onClick={addItem}>Add a Item</button>
            {formatted}
        </div>
    );
}