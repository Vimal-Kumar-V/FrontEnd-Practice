import ReactDOM from "react-dom";
import Header, {Details, Footer, Button} from "./Component";

function Page(){
    return (
        <div className="main">
            <Header />
            <Button />
            <Details />
            <Footer />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"));