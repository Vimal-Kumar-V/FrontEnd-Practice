import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import "./App.css"

function App() {
  return <BrowserRouter>
    <Link className="nav" to="/">Home</Link>
    <Link className="nav" to="/about">About</Link>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route />
    </Routes>
  </BrowserRouter>
}

export default App;
