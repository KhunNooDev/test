import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Body1 extends Component {
  constructor (props) {
    super(props);

    this.state = {
        videoURL: 'https://bit.ly/2SOqqVj'
    }
}
  render() {
    return (
      <div id="wrapper" class="skewed">
        <div class="layer top">
        <div class="content-wrap">
          <div class="content-body">
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
             </video>
          </div>          
            <img src="https://bit.ly/2DqFDIw" />
          </div>
        </div>
        <div class="layer bottom">
          <div class="content-body">
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
              <h1>TouchMyLike</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
              <p>อธิบาย</p>
            </ScrollAnimation>
         </div>
        </div>
      </div>
    );
  }
}

export default Body1;