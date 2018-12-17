import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Body2 extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
            img1: 'https://bit.ly/2DqFDIw',
            img2: 'https://bit.ly/2DqFDIw',
            img3: 'https://bit.ly/2DqFDIw'
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                        <img  className="rounded-circle rounded mx-auto d-block" src={this.state.img1} alt="Technology" width="140" height="140" />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInDown' animateOut='fadeOut'>
                        <h2>Technology</h2>
                        <p>{`${process.env.PUBLIC_URL}/`} Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-4">
                    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                        <img  className="rounded-circle rounded mx-auto d-block" src={this.state.img2} alt="Media" width="140" height="140" />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInDown' animateOut='fadeOut'>
                        <h2>Media</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-4">
                    <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                        <img  className="rounded-circle rounded mx-auto d-block" src={this.state.img3} alt="Lifestyle" width="140" height="140" />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInDown' animateOut='fadeOut'>
                        <h2>Lifestyle</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    </ScrollAnimation>
                </div>
            </div>
        );
    }
}


export default Body2;