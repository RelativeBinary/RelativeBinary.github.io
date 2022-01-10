import './App.css';

import About from './pages/About';
import Work from './pages/Work';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import Testing from './components/Testing';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Work />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/testing' element={<Testing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
