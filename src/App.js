import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ImageBanner from "./components/ImageBanner";
import Transition from "./components/Transition";
import Home from "./pages/Home";
import About from "./pages/About";

const Banner = () => (
  <div>
    <ImageBanner />
  </div>
);

function App() {
  return (
    <Router>
      <Transition />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
