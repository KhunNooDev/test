import React, { Component } from 'react';
import "./CSS/introduce.css";

class Body1 extends Component {
  render() {
    return (
      <section id="wrapper" class="skewed">
        <div class="layer top">
          <div class="content-wrap">
           <div class="content-body">
              <h1>Animation</h1>
            </div>
            <img src="https://bit.ly/2DqFDIw" />
          </div>
        </div>
        <div class="layer bottom">
          <div class="content-body">
            <h1>TouchMyLike</h1>
            <p>อธิบาย</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Body1;