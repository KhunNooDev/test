import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Body/Home";
import ClassRoom from "./Body/ClassRoom";
import About from "./Body/About";

class Router extends Component {
    render() {
      return (
  <Switch>
    <Route exact path="/"component={Home} />
    <Route path="/ClassRoom"component={ClassRoom} />
    <Route path="/About" component={About} />
  </Switch>
);
}
}

export default Router;
