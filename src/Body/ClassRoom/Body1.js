import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Doc1 extends Component { 
  render() {
    return (
        <div>
            <div><br /><br /><br /></div>
            <div className="my-5 row">
                <div className="col-lg-4">
                    <a href={`${process.env.PUBLIC_URL}/#/ClassRoom_Doc1`}>
                    <div className="px-3 my-2 border rounded grow-shadow">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                            <img  className="mx-auto d-block" src="https://bit.ly/2DqFDIw" alt="test" width="70%" height="70%" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInDown' animateOut='fadeOut'>
                            <h4 className="text-center">หัวข้อ</h4>
                            <p>คำอธิบาย</p>
                        </ScrollAnimation>
                    </div></a>
                </div>
            </div>
        </div>
    );
  }
}

export default Doc1;