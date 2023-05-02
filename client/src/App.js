import "./index.css";
import React from "react";
import Home from "./pages/Home";
import Nist from "./pages/Nist";
import Twitter from "./pages/Twitter";
import Header from "./components/Header";
import Employees from "./pages/Employees";
import Stackoverflow from "./pages/Stackoverflow";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Nist" element={<Nist />} />
          <Route path="/Twitter" element={<Twitter />} />
          <Route path="/Instagram" element={<Employees />} />
          <Route path="/Stackoverflow" element={<Stackoverflow />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
