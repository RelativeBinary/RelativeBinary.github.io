import './App.css';

import About from './pages/About';
import Work from './pages/Work';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import Testing from './components/Testing';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { useContext } from 'react';
import { StylesContext } from './contexts/StylesContext';

function App() {
  const themeContext = useContext(StylesContext);
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path='/' element={<Work />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/testing' element={<Testing />}></Route>
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
