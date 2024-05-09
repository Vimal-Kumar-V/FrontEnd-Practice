import logo from "./icons/airbnb-logo.svg"
import data from "./Data"
import "./App.css"

export function NavBar(){
    return (
    <div className="navbar" >
            <img src={logo}/>
    </div>
    )
}

export function HallFrame(){
    return (
        <div className="hall-frame">
        <img src="/images/hall-frame.svg"/>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>

</div>
    )
}

function Card(props){
    let badgeText = props.openSeats === 0? "SOLD OUT" : props.online? "ONLINE": null;
    return <div className="card">
       {badgeText && <p id="badge">{badgeText}</p>}
        <img src={props.img} />
        <span>
            <p>{props.rating}</p> 
            <p className="country">({props.unknown}) . {props.country}</p>
        </span>
        <p>{props.opinion}</p>
        <p> <b>From {props.rate} </b> / person</p>
    </div>
}

export function PersonalOpinions(){
    let card_list = data.map(props => 
                    <Card {...props}/>)
    return (
        <div className="card-list">
            {card_list}       
        </div>
    )
}
