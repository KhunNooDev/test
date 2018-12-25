import React from 'react'
import { Switch, Route } from "react-router-dom";

import Home from '../Body/Home'

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    );
  }
}