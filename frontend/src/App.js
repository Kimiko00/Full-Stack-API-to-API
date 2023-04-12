import './index.css';
import Header from './components/Header';
import Employees from './pages/Employees';
import Home from './pages/Home';
import Tweets from './pages/Tweets';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/tweets" element={<Tweets />} />
        </Routes>
      </Header>  
    </BrowserRouter>
    );
}

export default App;
