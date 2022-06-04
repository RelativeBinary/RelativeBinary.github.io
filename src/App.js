import './App.css';

import About from './pages/About';
import Home from './pages/Work';

import { Routes, Route } from 'react-router-dom';
import Testing from './components/Testing';

import React from 'react';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/testing' element={<Testing />}></Route>
      </Routes>
    </>
  );
}

export default App;
