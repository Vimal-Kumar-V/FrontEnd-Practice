import ReactDOM from "react-dom"
import Header, {MainContent} from "./Component"


function App() {
    return (
        <div className="app">
            <Header />
            <MainContent />
        </div>
    )
}
ReactDOM.render(<App />,
document.getElementById("root"));

