import "./index.css";
import React from "react";
import Home from "./pages/Home";
import Cisco from "./pages/cisco";
import News from "./pages/news";
import Nist from "./pages/others/Nist";
import Sodan from "./pages/others/Sodan";
import Twitter from "./pages/socialMedia/Twitter";
import Timeline from "./pages/socialMedia/twitterUser";
import Stackoverflow from "./pages/others/Stackoverflow";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/News" element={<News />} />
        <Route path="/Nist" element={<Nist />} />
        <Route path="/Cisco" element={<Cisco />} />
        <Route path="/Sodan" element={<Sodan />} />
        <Route path="/Twitter" element={<Twitter />} />
        <Route path="/Twitter-User" element={<Timeline />} />
        <Route path="/Stackoverflow" element={<Stackoverflow />} />
        <Route path="/" element={<Navigate replace to="/Twitter" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
