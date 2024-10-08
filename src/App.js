// src/App.js
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import "./App.css";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="padded-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
