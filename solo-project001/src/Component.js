import profile_image from "./images/demo1.jpeg"
import twitter from "./icons/twitter.png"
import linkedin from "./icons/linkedin.jpeg"
import instagram from "./icons/instagram.jpeg"
import github from "./icons/github.png"
import facebook from "./icons/facebook.png"
import blue_linkedin from "./icons/blue-linkedin.jpeg"
import email from "./icons/envelope-solid.svg"
import "./component.css"
export default function Profile(){
    return (
        <div className="profile">
            <img src= {profile_image} alt="No image"/>
            <h4>Laura Smith</h4>
            <h6>Frontend Developer</h6>
            <p>noonenoneempty</p>
        </div>
    )
}

export function Details(){
    return (<div className="details">
    <h4> About </h4>
    <p>He is an India Jedi who defines himself as straight. 
        He started studying medicine at college but never finished the course. 
        He is allergic to milk. He has a severe phobia of bridges</p>
    <h4> Interests </h4>
    <p>He is an India Jedi who defines himself as straight. 
        He started studying medicine at college but never finished the course. 
        He is allergic to milk. He has a severe phobia of bridges</p>
    </div>)
}

export function Footer(){
    return (<div className="footer">
        <img src={twitter} width="40px"/>
        <img src={linkedin} width="40px"/>
        <img src={facebook} width="40px"/>
        <img src={github} width="40px"/>
        <img src={instagram} width="40px"/>
    </div>)
}

export function Button(){
    return (<div className="button">
        <button className="email"><img src={email}/><p>Email</p></button>
        <button id="linkedin" className="email"><img src={blue_linkedin}/><p>Linkedin</p></button>
    </div>)
}