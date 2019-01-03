import React from 'react'
import { Parallax }  from 'react-parallax';

import logo from '../../img/TML.png';
import bg1 from '../../img/1.jpg';

const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};
export default class Home extends React.Component {
    render() {
    return(
        <div>
            <Parallax
                blur={{min: -15, max: 15}}
                bgImage={bg1}
                bgImageAlt="1"
                strength={200}
            >
                <div style={{ height: 500 }}>
                <img src={logo} alt="" style={insideStyles} />
            </div>
                <div style={{height: window.innerHeight/4}} />
            </Parallax>
        </div>
        );   
    }
}