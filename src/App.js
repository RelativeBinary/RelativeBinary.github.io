import './App.css';

import About from './pages/About';
import Work from './pages/Work';

import { Routes, Route } from 'react-router-dom';
import Testing from './components/Testing';

import React from 'react';

function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Work />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/testing' element={<Testing />}></Route>
      </Routes>
    </>
  );
}

export default App;
