import React from 'react';
import ReactDOM from 'react-dom';
import { Arwes, ThemeProvider, createTheme, Button } from 'arwes';

const App = () => (
  <ThemeProvider theme={createTheme(myTheme)}>
    <Arwes>
      <h1>My Project</h1>
      <p>Some text :D</p>
      <div style={{ padding: 20 }}>
        <Button layer='success'>My Button</Button>
      </div>
    </Arwes>
  </ThemeProvider>
);

const myTheme = {
  color: {
    primary: {
      base: '#be26fc',
      dark: '#8e1bbd',
      light: '#c95bf6'
    },
    header: {
      base: '#fc26fa',
      dark: '#a818a7',
      light: '#f458f2'
    }
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));
