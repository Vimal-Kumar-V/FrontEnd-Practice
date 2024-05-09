import ReactDOM from "react-dom";
import { NavBar, PlaceList} from "./App";

function App(){
    return (<div className="app">
        <NavBar />
        <PlaceList />
    </div>)
}

ReactDOM.render(<App />,
                document.getElementById("root"));