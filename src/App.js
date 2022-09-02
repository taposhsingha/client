import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotelslist from "./pages/hotelslist/Hotelslist";
import PlacesList from "./pages/placeslist/PlacesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotelslist />} />
        <Route path="/places" element={<PlacesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
