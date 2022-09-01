import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotelslist from "./pages/hotelslist/Hotelslist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotelslist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
