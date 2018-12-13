import React, { Component } from 'react';

import Header from './Header';
import Body1 from './Body/Body1';
import Body2 from './Body/Body2';
import Body3 from './Body/Body3';
import Footer from './Footer';

import PopupLogin from './Header/Popup/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PopupLogin />
  
        <Body1 />
        <div class="container">
          <br></br>
          <Body2 />
          <br></br>
          <Body3 />
          <br></br>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
