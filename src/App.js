import React, { Component } from 'react';

import Header from './Header';
import Body1 from './Body/Body1';
import Body2 from './Body/Body2';
import Body3 from './Body/Body3';
import Footer from './Footer';

// import PopupLogin from './Header/Popup/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';

import './Body/CSS/body1.css';
import './Footer/CSS/footer.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <PopupLogin /> */}
        <Body1 />
        <div class="container">
          <br />
          <Body2 />
          <br />
          <Body3 />
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
