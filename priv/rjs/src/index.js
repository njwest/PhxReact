import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme,  SoundsProvider, createSounds } from 'arwes';
import Konami from 'react-konami-code';
import Home from './screens/Home.js';
import MidiLounge from './screens/MidiLounge.js';

const myTheme = {
  color: {
    code: {
      background: '#000'
    }
  }
};

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
    secret: {
      sound: { src: ['/sound/secret.mp3'] },
    }
  }
};

const MyComponent = () => {
  render(){
    return (
      <h1>
        Hi
      </h1>
    )
  }
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      midiLounge: false,
      loungeLocked: true,
      playSecret: false,
      currentMidi: "BlackCowByShino.mp3",
      previousMidi: []
    }

    this.selectScreen = this.selectScreen.bind(this);
    this.unlockLounge = this.unlockLounge.bind(this);
    this.easterEgg = this.easterEgg.bind(this);
    this.selectMidi = this.selectMidi.bind(this);
  }

  unlockLounge(){
    let { midiLocked } = this.state;

    !midiLocked ?
      this.setState({ midiLocked: true }) :
      this.setState({ midiLocked: false })
  }

  selectScreen(){
    let { midiLounge } = this.state;

    !midiLounge ? this.setState({ midiLounge: true })
    :this.setState({ midiLounge: false })
  }

  easterEgg() {
    this.setState({loungeLocked: false});
    this.setState({playSecret: true});
  }

  selectMidi(selected){
    this.setState({
      currentMidi: selected
    });
  }

  render(){
    let {
      midiLounge,
      loungeLocked,
      playSecret,
      currentMidi
    } = this.state;

    return(
      <ThemeProvider theme={createTheme(myTheme)}>
        <SoundsProvider sounds={createSounds(mySounds)}>

            {!midiLounge ?
                <Home
                  midiButton={this.selectScreen}
                  unlockLounge={this.unlockLounge}
                  loungeLocked={loungeLocked}
                  nicksMood={"Happy"}
                />
                :
                <MidiLounge homeButton={this.selectScreen} selectMidi={this.selectMidi} />
            }

            <div style={{position: 'fixed', bottom: 0, right: 15}}>
              <audio autoPlay="true" controls>
                <source src={`midi/${currentMidi}`} type="audio/mpeg" />
              </audio>
            </div>
            {playSecret ?
              <audio autoPlay="true">
                <source src="sound/secret.mp3" type="audio/mpeg" />
              </audio> :
              <div></div>
            }

            <Konami action={this.easterEgg}/>
        </SoundsProvider>
      </ThemeProvider>
    )
  }

}

ReactDOM.render(<App />, document.querySelector('#root'));
