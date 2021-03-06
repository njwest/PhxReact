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
            <h4 style={{
              marginBottom: '5px'
            }}>
              Unlock with the
                <span style={{color: '#00ff00'}}> &nbsp;Konami Code
                </span>
              </h4>
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
          <Button animate
            onClick={this.props.midiButton}
          >
            <h3 style={{
              marginBottom: '5px',
              color: '#00ff00'
            }}><Words animate>Enter</Words></h3>
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
                        <Image animate resources='/img/nick-west-headshot.jpg'/>
                    </div>
                    <header style={{
                      marginTop: '-10px'
                    }}>
                      <h1><Words animate show={anim.entered}>
                        Nick West | 韋羲
                      </Words></h1>
                      <h3 style={{
                        marginTop: '-20px'
                      }}>
                        <Words animate show={anim.entered}>
                        Writer & Engineer
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
                            Nick West(韋羲) is a writer, editor, and software engineer who has contributed writing and photography to the South China Morning Post, The Star Ledger, New Brunswick Today, The Daily Targum, and InsiderNJ.
                          </Words>
                        </p>

                        <p>
                        <Words animate show={anim.entered}>
                          As an avid open-source developer, Nick has contributed code to the Ethereum C++ compiler core, the XVG C++ blockchain core, Strava's docs, and the Arwes ReactJS cyberpunk UI framework. Nick's code specialties include VueJS, ReactJS, Elixir, Solidity, Tails, and more.
                        </Words>
                        </p>
                        <p>
                        <Words animate show={anim.entered}>
                          At press time, Nick giving talks, editing, and working on interesting projects out of Hong Kong.
                        </Words>
                        </p>

                        {this.midiButton()}

                        <Header animate >
                            <h3 style={{ margin: 0 }}>Recent Articles</h3>
                        </Header>
                        <p>
                            <Link href='https://www.scmp.com/comment/opinion/article/3031811/fix-hong-kongs-politics-and-we-can-fix-its-frustrations-too'
                            target='scmp'
                            >
                              <Words animate show={anim.entered}>
                                >> "Fix Hong Kong’s politics and we can fix its frustrations too" - Backpage Commentary, SCMP Sunday Morning Post, October 6, 2019
                                </Words>
                            </Link>
                            <br/>

                            <Link href='https://www.insidernj.com/50-shades-joe-biden/'
                            target='insidernj'
                            >
                              <Words animate show={anim.entered}
                              >
                                >> "50 Shades of Joe Biden" - InsiderNJ Edward Edwards Column, February 5, 2020
                                </Words>
                            </Link>
                        </p>

                        <Header animate >
                            <h3 style={{ margin: 0 }}>Guides</h3>
                        </Header>
                        <p>

                            <Link href='https://medium.com/@njwest/jwt-auth-with-an-elixir-on-phoenix-1-3-guardian-api-and-react-native-mobile-app-1bd00559ea51'
                            target='medium'
                            >
                              <Words animate show={anim.entered}>
                                >> Build an Elixir JWT Auth API</Words>
                            </Link>
                            <br/>

                            <Link
                              href='https://medium.com/@njwest/building-a-react-native-jwt-client-efacf78b9364'
                              target='medium'
                            >
                              <Words animate show={anim.entered}
                              >
                                >> Build a React Native JWT Client
                                </Words>
                            </Link>
                            <br/>
                            <Link
                              href='https://medium.com/js-dojo/getting-started-with-vuejs-for-web-and-native-285dc64f0f0d'
                              target='medium'
                            >
                              <Words animate show={anim.entered}
                              >
                                >> Getting Started with VueJS
                              </Words>
                            </Link>
                        </p>

                      </main>
                    </Frame>

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
