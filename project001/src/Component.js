import "./component.css"

function HeaderLeft(){
    return <div className="header-left">
        <img src="/logo192.png" />
        <h1>ReactFacts</h1>
    </div>
}

export default function Header(){
    return <div className="header">
        <HeaderLeft />
        <h1>React Course - Project1</h1>
    </div>
}

export function MainContent(){
    return   <div class="main">
        <h2>
            Fun Facts About React
        </h2>
        <ul>
            <li>Was released in 2013</li>
            <li>Was maintained by FaceBook</li>
            <li>Was originally created by jordan Walke</li>
            <li>Has well over 100k stars on github</li>
            <li>it powers thousands of enterprise application including mobie application</li>
        </ul>
    </div>
}