import React, { Component, Fragment } from 'react';
import { Arwes, Button, Content, Words, Row, Col } from 'arwes';
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
                      marginTop: '100px',
                    }}>
                    <header style={{
                      marginTop: '-10px'
                    }}>
                      <h1><Words animate show={anim.entered} layer='success'>
                        THE LOUNGE
                      </Words></h1>
                      <h3 style={{
                        marginTop: '-20px'
                      }}>
                        <Words animate layer='alert' show={anim.entered}>
                        at NickWe.st
                        </Words>
                      </h3>
                    </header>

                    </div>
                  </Content>
                  <div style={{
                    textAlign: 'center',
                  }}>
                    <Button animate onClick={this.props.homeButton} layer='secondary'>
                      Leave
                    </Button>
                  </div>
                </Col>
              </Row>
          </Fragment>
        )}
      </Arwes>

    )
  }

}
