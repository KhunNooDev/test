import React, { Component } from 'react';

import Header from './Header';
import Router from './Router';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';

import './CSS/HomeBody1.css';
import './CSS/HoverShadow.css';
import './CSS/menu.css'
import './CSS/footer.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
