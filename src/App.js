import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Transition from "./components/Transition";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Transition />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
