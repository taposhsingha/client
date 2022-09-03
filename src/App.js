import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotelslist from "./pages/hotelslist/Hotelslist";
import PlacesList from "./pages/placeslist/PlacesList";
import CreateHotelPage from "./pages/createhotelpage/CreateHotelPage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import HotelPage from "./pages/hotelpage/HotelPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotelslist />} />
        <Route path="/hotels/:id" element={<HotelPage />} />
        <Route path="/createhotel" element={<CreateHotelPage />} />
        <Route path="/places" element={<PlacesList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
