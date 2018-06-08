import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme, withStyles, Arwes } from 'arwes';

const styles = theme => ({
  root: {
    padding: [theme.padding, 0],
    background: theme.background.primary.level0
  },
  title: {
    textDecoration: 'underline'
  }
});

const MyHeader = withStyles(styles)(({ classes, children }) => (
  <header className={classes.root}>
    <h1 className={classes.title}>{children}</h1>
  </header>
));

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <Arwes>
      <MyHeader>Arwes Project</MyHeader>
      <p>A SciFi Project</p>
    </Arwes>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
