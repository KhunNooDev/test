import React, { Component } from 'react';

import Body1 from './Body1';
import Body2 from './Body2';
import Body3 from './Body3';

class Home extends Component {
  render() {
    return (
        <div>
          <Body1 />
            <div className="container">
                <br />
                <Body2 />
                <br />
                <Body3 />
                <br />
            </div>
        </div>
    );
  }
}

export default Home;