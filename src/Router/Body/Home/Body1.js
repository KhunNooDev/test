import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import TML from '../img/TML.png'

class Body1 extends Component {
  constructor (props) {
    super(props);

    this.state = {
        videoURL: 'https://bit.ly/2SOqqVj',
    }
}
  render() {
    return (
      <div id="wrapper" className="skewed">
        <div className="layer top">
        <div className="content-wrap">
          <div className="content-body">
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
             </video>
          </div>          
            <img className="w-auto h-50" src={TML} alt="Logo" width="250" height="250"  />
          </div>
        </div>
        <div className="layer bottom">
          <div className="content-body">
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