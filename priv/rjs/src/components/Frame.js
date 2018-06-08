import React, { Component, Fragment } from 'react';
import { Frame } from 'arwes';

export default class ToggleFrame extends Component {
    constructor () {
        super(...arguments);
        this.state = { show: true };
    }
    render () {
        return (
            <Fragment>
              <button onClick={() => this.onToggle()}>
                Show/Hide
              </button>
              <div style={{ display: 'inline-block', padding: '20px' }}>
                <Frame
                  show={this.state.show}
                  animate={true}
                  level={1}
                  corners={4}
                  layer='primary'
                >
                  <div style={{ padding: '20px 40px', fontSize: '32px' }}>
                    Nick West
                  </div>
                </Frame>
              </div>
            </Fragment>
        );
    }
    onToggle () {
        this.setState({ show: !this.state.show });
    }
}
