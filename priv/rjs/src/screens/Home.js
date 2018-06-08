import React, { Component, Fragment } from 'react';
import { Arwes, Button, Content, Words, Row, Col, Header,  Frame, Image, Link } from 'arwes';
// import MIDISounds from 'midi-sounds-react';


export default class Home extends Component{
  constructor(props) {
    super(props);
    this.midiButton = this.midiButton.bind(this);
  }

  midiButton(){
    let { loungeLocked } = this.props;

    if (loungeLocked){
      return (
        <div style={{
          textAlign: 'center',
          marginTop: '25px',
          marginBottom: '36px'
        }}>
          <Button>
            <h3><Words animate>Locked</Words></h3>
            <h4>Unlock with the Konami Code</h4>
          </Button>
        </div>
      )
    } else {
      return(
        <div style={{
          textAlign: 'center',
          marginTop: '25px',
          marginBottom: '36px'
        }}>
          <Button animate onClick={this.props.midiButton}>
            <h3><Words animate>Enter</Words></h3>
            <h4>The Lounge at NickWe.st</h4>
          </Button>
        </div>
      )
    }
  }

  render() {
    return (
      <Arwes animate show>
        {anim => (
          <Fragment>
            <Header animate style={{textAlign: 'center'}}>
              <h1 style={{ margin: '0px 0px'}}>
                NickWe.st
              </h1>
            </Header>
              <Row>
                <Col s={12} m={8} l={6} offset={['m2', 'l3']}>
                  <Content>
                    <div style={{
                      textAlign: 'center',
                      marginTop: '0.5em'
                    }}>
                    <div style={{ margin: '0 auto', maxWidth: 342 }}>
                        <Image animate resources='/img/nick-west.png'/>
                    </div>
                    <header style={{
                      marginTop: '-10px'
                    }}>
                      <h1><Words animate show={anim.entered}>
                        Nick West | 眨眼龙
                      </Words></h1>
                      <h3 style={{
                        marginTop: '-20px'
                      }}>
                        <Words animate show={anim.entered}>
                        Distributed Systems Engineer
                        </Words>
                      </h3>
                    </header>

                    <div style={{
                      marginTop: "-12px",
                      marginBottom: "15px"
                    }}>
                      <Link href='https://github.com/njwest' target='github'
                      >
                        <Button animate show={anim.entered}
                        layer='success'
                        >
                          {anim2 => <Words animate show={anim2.entered}>Github</Words>}
                        </Button>
                      </Link>

                      <Link href='mailto:mail@nickwe.st'
                      style={{marginLeft: 20}}

                      >
                        <Button animate show={anim.entered}
                        >
                          <span className="icon">
                            <i className="fa fa-envelope"></i>
                          </span>
                        </Button>
                      </Link>

                      <Link
                       href='https://medium.com/@njwest/jwt-auth-with-an-elixir-on-phoenix-1-3-guardian-api-and-react-native-mobile-app-1bd00559ea51' target='medium'
                       style={{marginLeft: 20}}
                       >
                        <Button
                          animate
                          show={anim.entered}
                          layer='alert'
                        >
                          {anim2 => <Words animate show={anim2.entered}>Medium</Words>}
                        </Button>
                      </Link>
                    </div>

                    <Frame
                      animate={true}
                      level={1}
                      corners={4}
                      layer='primary'
                    >
                      <main style={{
                        textAlign: 'left',
                        padding: '10px 40px'
                      }}>
                        <Header animate>
                            <h3 style={{ margin: 0 }}>About Nick</h3>
                        </Header>

                        <p>
                          <Words animate show={anim.entered}>
                          Nick West is a Distributed Systems Engineer who specializes in Elixir, Phoenix, ReactJS, and React Native. Nick has contributed code to the Ethereum C++ core, the XVG C++ core, and Strava's API docs.
                          </Words>
                        </p>

                        <Header animate >
                            <h3 style={{ margin: 0 }} >Latest Publications</h3>
                        </Header>
                        <p>

                            <Link href='https://medium.com/@njwest/jwt-auth-with-an-elixir-on-phoenix-1-3-guardian-api-and-react-native-mobile-app-1bd00559ea51'
                            target='medium'
                            >
                              <Words animate show={anim.entered}>
                                >>Build an Elixir JWT Auth API</Words>
                            </Link>
                            <Link href='https://medium.com/@njwest/building-a-react-native-jwt-client-efacf78b9364'
                            target='medium'
                            >
                              <Words animate show={anim.entered}
                              >
                                >>Build a React Native JWT Client</Words>
                            </Link>
                        </p>

                      </main>
                    </Frame>
                    {this.midiButton()}

                    </div>
                  </Content>

                </Col>
              </Row>
          </Fragment>
        )}
      </Arwes>

    )
  }

}
