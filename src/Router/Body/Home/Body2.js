import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import img1 from "../img/logo1.png";
import img2 from "../img/logo2.png";
import img3 from "../img/logo3.png";

class Body2 extends Component {
  render() {
      return (
        <div className="row">
                <div className="col-lg-4">
                    <div className="px-3 my-2 border rounded grow-shadow">
                    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                        <img  className="mx-auto my-3 d-block" src={img1} alt="TouchMyLike in 2019" width="70%" height="70%" />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInDown' animateOut='fadeOut'>
                        <h4>TouchMyLike in 2019</h4>
                        <p>{`${process.env.PUBLIC_URL}/`} Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    </ScrollAnimation>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="px-3 my-2 border rounded grow-shadow">
                    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                        <img  className="mx-auto my-3 d-block" src={img2} alt="Programming Fundamentals" width="60%" height="60%" />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInDown' animateOut='fadeOut'>
                        <h4>Programming Fundamentals</h4>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    </ScrollAnimation>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="px-3 my-2 border rounded grow-shadow">
                    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                        <img  className="mx-auto my-3 d-block" src={img3} alt="Web development" width="60%" height="60%" />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInDown' animateOut='fadeOut'>
                        <h4>Web development</h4>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    </ScrollAnimation>
                    </div>
                </div>
          </div>
      );
  }
}


export default Body2;