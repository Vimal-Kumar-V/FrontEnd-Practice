import React from "react";


function WindowManipulator(){

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const handleResizeWindowWidth = () => {setWindowWidth(window.innerWidth)}

  const rollbackFunction = () => {
    window.removeEventListener("resize", handleResizeWindowWidth)
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResizeWindowWidth)
    return rollbackFunction
  })
  return <h1>Window Size is {window.innerWidth}</h1>
}

function App() {
  const [show, setShow] = React.useState(true);
  console.log(show);
  return (
    <div>
          <button onClick={() => {setShow(!show)}} style={{"width":"300px","height":"100px"}}>
            Toogle Everything
          </button>
          {show && <WindowManipulator />}
          <h1>Hello My Friend</h1>
    </div>
  );
}

export default App;
