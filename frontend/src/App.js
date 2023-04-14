import './index.css';
import React from 'react';
import Home from './pages/Home';
import Nist from './pages/Nist';
import Tweets from './pages/Tweets';
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="/nist" element={<Nist />} />
        </Routes>
      </Header>  
    </BrowserRouter>
    );
}

export default App;
