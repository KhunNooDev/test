import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import img from '../img/logo.png';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  // scrollToWithContainer() {

  //   let goToContainer = new Promise((resolve, reject) => {

  //     Events.scrollEvent.register('end', () => {
  //       resolve();
  //       Events.scrollEvent.remove('end');
  //     });

  //     scroller.scrollTo('scroll-container', {
  //       duration: 800,
  //       delay: 0,
  //       smooth: 'easeInOutQuart'
  //     });

  //   });

  //   goToContainer.then(() =>
  //     scroller.scrollTo('scroll-container-second-element', {
  //       duration: 800,
  //       delay: 0,
  //       smooth: 'easeInOutQuart',
  //       containerId: 'scroll-container'
  //     }));
  // }
  // componentWillUnmount() {
  //   Events.scrollEvent.remove('begin');
  //   Events.scrollEvent.remove('end');
  // }
  render() {
    return (
        <header style={{position:"fixed",zIndex:5,width:"100%"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand text-white" href="#"><img className="mx-1" src={img} alt="" width="50px" height="50px"/> TouchMylike</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link text-white" onClick={() => scroll.scrollTo(0)}>Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" onClick={() => scroll.scrollTo(660)}>Class</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" onClick={() => scroll.scrollTo(1320)}>About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" onClick={() => scroll.scrollTo(1980)}>Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
        </header>
    );
  }
}