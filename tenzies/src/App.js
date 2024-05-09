import { useEffect, useState } from "react";
import "./App.css"

function App() {
  return (
    <div className="home_page">
      <DefaultPage />
      <Dices />
    </div>
  )
}

function DefaultPage() {
  return (
    <>
      <h1>Tenzies</h1>
      <p>
        Roll Until all dices are same. Click Each dice to freeze it at its
        current value between rolls
      </p>
    </>
  );
}

function Dices() {

  function rollDices(){
    setDiceState(prevDices => {
      let dices = []
      for (let dice of prevDices){
        if (!dice.paused)
            dice.curr_val = Math.floor(Math.random() * 6) + 1;
        dices.push(dice);
      }
      return dices;
    });
    gameFinished();
  }

  function pauseDice(dice_id){
    setDiceState(prevDices => {
      let dices = []
      for (let dice of prevDices){
        if(dice.key === dice_id)
          dice.paused = !dice.paused;
        dices.push(dice)
      }
      return dices;
    })
  }

  function gameFinished(){
    let paused = true;
    let sum = 0;
    for (let dice of diceobject)
    {
       if (!dice.paused)
           paused = false;
       sum += dice.curr_val;
    }
    return (paused && sum / 10 == diceobject[0].curr_val);
  }

  const resetGame = () => {
    setDiceState(initValues())
    rollDices();
  }

  const initValues = () =>
{
    let dices = [];
    for (let i = 0; i < 10; i++)
      {
        dices.push({
        "_id": i,
        "key": i,
        "curr_val": 1,
        "paused": false
      });
  }
    return dices;
}
  const [diceobject, setDiceState] = useState(initValues());
  useEffect(rollDices, [])
  return (
    <div className="dice-button">
      <div className="dices">
         {diceobject.map(dice => 
         <button 
            onClick={()=>pauseDice(dice.key)} 
            className="dice"
            style={{background: dice.paused?"wheat": "white"}}>
          {dice.curr_val}
        </button>)}
      </div>
      {gameFinished()?<button className="roll-button" onClick={resetGame}> Reset Game</button>:<button className="roll-button" onClick={rollDices}> Roll </button>}
    </div>
  )
}

export default App;
