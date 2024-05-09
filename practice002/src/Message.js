import React from "react"

export default function Messages(){
    const [messages, setMessages] = React.useState([])
    let message = "";
    if (messages.length === 0)
    message = "You are all caught up!!";
    else
    message = `You have ${messages.length} unread ${messages.length === 1? "message": "messages"}`
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}