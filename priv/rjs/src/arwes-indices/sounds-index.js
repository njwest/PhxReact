import React from 'react';
import ReactDOM from 'react-dom';
import { Arwes, ThemeProvider, createTheme, Button, SoundsProvider, createSounds } from 'arwes';

const mySounds = {
  shared: { volume: 1, },  // Shared sound settings
  players: {  // The player settings
    click: {  // With the name the player is created
      sound: { src: ['/sound/click.mp3'] }  // The settings to pass to Howler
    },
    typing: {
      sound: { src: ['/sound/typing.mp3'] },
      settings: { oneAtATime: true }  // The custom app settings
    },
    deploy: {
      sound: { src: ['/sound/deploy.mp3'] },
      settings: { oneAtATime: true }
    },
  }
};

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <SoundsProvider sounds={createSounds(mySounds)}>
    <Arwes animate show>
      {anim => (
        <div style={{ padding: 20 }}>
          <h1>My App</h1>
          <p>A SciFi Project</p>
          <Button animate show={anim.entered}>Travel to Space</Button>
        </div>
      )}
    </Arwes>
    </SoundsProvider>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
