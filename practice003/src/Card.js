import ReactDOM from "react-dom";
import demo_image from "./images/demo1.jpeg"
import prof_image from "./images/joker.jpeg"
import hulk_image from "./images/hulk.jpeg"
import iron_man_image from "./images/iron-man.jpeg"
import phone from "./icons/phone.png"
import mail from "./icons/envelope-solid.svg"

import "./card.css"

function Card({img, name, phoneNumber, email}){
    return (
        <div className="Card">
        <img src={img}/>
        <h2> {name} </h2>
        <div className="Contact Phone"> 
            <img src ={phone} />
            <p>{phoneNumber}</p>
        </div>
        <div className="Contact Email"> 
            <img src ={mail} />
            <p>{email}</p>
        </div>
        </div>
        )
}

export default function CardList(){
    return (
        <div className="CardList">
            <Card 
                img={demo_image}
                name="Devil"
                phoneNumber = "89432871923"
                email = "devil@devil.com"
            />
            <Card 
                img={prof_image}
                name="Joker"
                phoneNumber = "6782394751238"
                email = "joker@devil.com"
            />
            <Card 
                img={hulk_image}
                name="Hulk"
                phoneNumber = "4781231982438"
                email = "hulk@devil.com"
            />
            <Card 
                img={iron_man_image}
                name="IronMan"
                phoneNumber = "9875126374818986"
                email = "tony@devil.com"
            />
        </div>
    )
}