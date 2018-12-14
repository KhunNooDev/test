import React from 'react';
import Iframe from 'react-iframe';
import { Media } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Body3 = () => {
  return (
    <div class="row">
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <Iframe url="https://www.youtube.com/embed/kdHwufi3FYU"
        width="560px"
        height="315px"
        display="initial"
        position="relative"
        class="col-lg-4"
        allowFullScreen/>
      </ScrollAnimation>
      <div class="col-lg-6">
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
};

export default Body3;