import React, { Component, Fragment } from 'react';
import { Arwes, Button, Content, Words, Row, Col, Frame, Image } from 'arwes';
// import MIDISounds from 'midi-sounds-react';

// Play Midi Function

  // playTestInstrument() {
  //   this.midiSounds.playChordNow(3, [60], 2.5);
  // }

  // <p><button onClick={this.playTestInstrument.bind(this)}>Play</button></p>

export default class MidiLounge extends Component{

  render() {
    return (
      <Arwes animate show background='/img/wallpaper2.jpg'>
        {anim => (
          <Fragment>
              <Row>
                <Col s={12} m={8} l={6} offset={['m2', 'l3']}>
                  <Content>
                    <div style={{
                      textAlign: 'center',
                    }}>
                      <header>
                        <h1><Words animate show={anim.entered} layer='success'>
                          Coming Soon: CoV Ninja
                        </Words></h1>
                        <h3 style={{
                          marginTop: '-20px'
                        }}>
                        <div style={{ margin: '0 auto', maxWidth: 400 }}>
                            <Image animate resources='/img/cov-ninja.png'/>
                        </div>
                        </h3>
                      </header>
                      <Frame>
                        <div>
                        <p>
                          <Words animate show={anim.entered}>
                            Nick is currently working on a Unity-based educational videogame called Coronavirus Ninja.
                          </Words>
                        </p>
                        <p>
                          <Words animate show={anim.entered}>
                            Stay tuned for more information
                          </Words>
                        </p>
                        </div>
                      </Frame>
                    </div>
                  </Content>
                  <div style={{
                    textAlign: 'center',
                  }}>
                    <Button animate onClick={this.props.homeButton} layer='success'>
                      Exit
                    </Button>
                  </div>
                </Col>
              </Row>
              <div style={{position: 'fixed', bottom: 0, right: 15}}>
                <audio autoPlay="true" controls>
                  <source src={`midi/GaslightingByShino.mp3`} type="audio/mpeg" />
                </audio>
              </div>
          </Fragment>
        )}
      </Arwes>

    )
  }

}
