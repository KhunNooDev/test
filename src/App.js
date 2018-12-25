import React from 'react';

import Header from './Header and Footer/header'
import Router from './Router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery.slim.min.js'
import 'popper.js/dist/popper.min.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
      </div>
    );
  }
}

export default App;
