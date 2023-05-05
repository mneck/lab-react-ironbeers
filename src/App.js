import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
