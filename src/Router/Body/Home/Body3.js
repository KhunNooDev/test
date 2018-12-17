import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { Media } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Body3 extends Component {
  constructor (props) {
    super(props);

    this.state = {
        youtobeURL: 'https://www.youtube.com/embed/kdHwufi3FYU'
    }
}
render(){
  return (
    <div className="row">
        <Iframe url={this.state.youtobeURL}
        width="560px"
        height="315px"
        display="initial"
        position="relative"
        class="col-lg-4"
        allowFullScreen/>
      <div className="col-lg-6">
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <Media body >
          <Media heading>
            Media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </ScrollAnimation>
      </div>
    </div>
  );
}
}

export default Body3;