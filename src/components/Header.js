import { Button } from '@mui/material';
import React from 'react';
import Typist from 'react-typist';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export default function Header() {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <>
      <div>
        <Typist>
          Hi, I'm
          <Button> Patrick Bornay. </Button>
        </Typist>
        <span>
          <Typist>
            <Typist.Delay ms={2000} />A web dev & cyber security enthusiast 😄
          </Typist>
        </span>
      </div>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <Button
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          >
            Toggle
          </Button>
        )}
      </ThemeContext.Consumer>
    </>
  );
}
