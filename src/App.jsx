import "./App.css";
import { NavBar } from "../src/components/navBar";
import { Home } from "./components/home";
import { Footer } from "./components/footer";
import { SliderMain } from "./components/slider-main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowOferts } from "./components/showOferts";
import { Ventas } from "./components/ventas";
import { Alquiler } from "./components/alquiler";
import { Propiedad } from "./components/Propiedad";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sliderMain" element={<SliderMain />}/>
          <Route path="/oferts" element={<ShowOferts/>}/>
          <Route path="/ventas" element={<Ventas/>}/>
          <Route path="/alquileres" element={<Alquiler/>}/>
          <Route path="/propiedad/:propiedad" element={<Propiedad/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
