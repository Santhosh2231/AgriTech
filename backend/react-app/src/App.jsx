import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Crops from './screens/Crops';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About"
import Contact from "./screens/Contact";
import CropPrice from './screens/CropPrice';
import CropDisease from './screens/CropDisease';

function App() {

  return (
   <BrowserRouter>
   <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/priceforecast" element={<Crops />} />
      <Route path="/cropdisease" element={<CropDisease />} />
      <Route path="/priceforecast/:crop" element={<CropPrice />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
