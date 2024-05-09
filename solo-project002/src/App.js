import './App.css';
import data from "./data"


export function NavBar(){
  return (<div className='navbar'>
    <img src="/images/planet-earth.png" />
    <p>my travel journal.</p>
  </div>)
}

function ContentNav(props){
  return (            
  <div className='content-nav'>
      <img src="/images/placeholder.png"/>
      <span>{props.country}</span>
      <a href={props.link} target='blank'>View on Google Maps</a>
  </div>
  )
}

function Content(props){
  return (   
       <div className='content'>
            <ContentNav {...props}/>
            <h1>{props.place}</h1>
            <h5>{props.start} - {props.end}</h5>
            <p>{props.description}</p>
       </div>)
}

function Place(props){
  return (<div className='card'>
    <img src={props.img} />
    <Content {...props}/>
  </div>)

}

export function PlaceList(){
   let places = data.map(
    (props) => <Place {...props} />
   );
  return (
  <div className="placelist">
    {places}
  </div>)
}