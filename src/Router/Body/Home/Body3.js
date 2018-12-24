import React, { Component } from 'react';
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
      <div className="col-lg-6 embed-responsive embed-responsive-16by9 mx-auto" style={{width:"95%"}}>
        <iframe src={this.state.youtobeURL} title="video" allowFullScreen="true" />
      </div>
      <div className="col-lg-6 my-3">
      <div className="px-3 py-3 border rounded shadow">
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <Media body >
          <Media heading>
            คลิปแนะนำ
          </Media>
          คลิปดี ดูซะ
        </Media>
      </ScrollAnimation>
      </div>
      </div>
    </div>
  );
}
}

export default Body3;