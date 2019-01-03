import React from 'react';

import Header from './Header and Footer/header';
import Router from './Router';
import Footer from './Header and Footer/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/popper.min.js';
import 'swiper/dist/css/swiper.min.css';
import 'swiper/dist/js/swiper.min.js';

import './CSS/swiper.css';
import './CSS/footer.css';
import './CSS/HoverShadow.css';

class App extends React.Component {
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
