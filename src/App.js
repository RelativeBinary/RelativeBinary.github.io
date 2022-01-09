import './App.css';

import About from './pages/About';
import Work from './pages/Work';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Work />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
