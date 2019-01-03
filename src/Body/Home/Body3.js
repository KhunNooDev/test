import React from 'react'
import { Parallax }  from 'react-parallax';
// import Swiper from './swiper'

import bg3 from '../../img/3.jpg';
import img1 from '../../img/logo1.png';
import img2 from '../../img/logo2.png';
import img3 from '../../img/logo3.png';

export default class Home extends React.Component {
    render() {
    return(
        <div>
            <Parallax
                blur={{min: -15, max: 15}}
                bgImage={bg3}
                bgImageAlt="2"
                strength={200}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="px-3 my-5 border rounded grow-shadow bg-secondary">
                                <img  className="mx-auto my-3 d-block" src={img1} alt="TouchMyLike in 2019" width="70%" height="70%" />
                                <h4>TouchMyLike in 2019</h4>
                                <p>{`${process.env.PUBLIC_URL}/`} Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="px-3 my-5 border rounded grow-shadow bg-secondary">
                                <img  className="mx-auto my-3 d-block" src={img2} alt="Programming Fundamentals" width="60%" height="60%" />
                                <h4>Programming Fundamentals</h4>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="px-3 my-5 border rounded grow-shadow bg-secondary">
                                <img  className="mx-auto my-3 d-block" src={img3} alt="Web development" width="60%" height="60%" />
                                <h4>Web development</h4>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height: window.innerHeight/4}} />
            </Parallax>
        </div>
        );   
    }
}