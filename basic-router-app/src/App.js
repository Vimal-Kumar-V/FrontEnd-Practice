import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import "./App.css"
import Footer from "./components/footer"

function App() {
  return 
  <BrowserRouter>
    <Link className="nav" to="/">Home</Link>
    <Link className="nav" to="/about">About</Link>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route />
    </Routes>
    <Footer />
  </BrowserRouter>
}

export default App;
