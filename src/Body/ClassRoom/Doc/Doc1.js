import React, { Component } from 'react';
// import { Button , Table  } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Doc1 extends Component {
  constructor(props) {
    super(props);

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.List = this.List.bind(this);
  }
openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
  
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

List(){
  return(
  <ListGroup>
    <ListGroupItem>1</ListGroupItem>
    <ListGroupItem>2</ListGroupItem>
    <ListGroupItem>3</ListGroupItem>
    <ListGroupItem>4</ListGroupItem>
    <ListGroupItem>5</ListGroupItem>
    <ListGroupItem>1</ListGroupItem>
    <ListGroupItem>2</ListGroupItem>
    <ListGroupItem>3</ListGroupItem>
    <ListGroupItem>4</ListGroupItem>
    <ListGroupItem>5</ListGroupItem>
    <ListGroupItem>1</ListGroupItem>
    <ListGroupItem>2</ListGroupItem>
    <ListGroupItem>3</ListGroupItem>
    <ListGroupItem>4</ListGroupItem>
    <ListGroupItem>5</ListGroupItem>
    <ListGroupItem>1</ListGroupItem>
    <ListGroupItem>2</ListGroupItem>
    <ListGroupItem>3</ListGroupItem>
    <ListGroupItem>4</ListGroupItem>
    <ListGroupItem>5</ListGroupItem>
  </ListGroup>);
}
  render() {
    return (
        <div>
        <br />
        <br />
        <div className="container">
          <div className="my-5 row">
            <div className="col-lg-4 px-3 py-3 my-2 border rounded shadow">
              <div className="col-lg-12">
                <div className="">
                <div className="pchide">
                  <div id="mySidenav" class="sidenav">
                    <a className="closebtn" onClick={this.closeNav}>&times;</a>
                    <this.List />
                  </div>
                  </div>
                  <div className="pchide"><a style={{fontSize:"30px",cursor:"pointer"}} onClick={this.openNav}>&#9776; open</a></div>
                  <div className="mhide"><this.List/></div>
                 </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="px-3 my-2 border rounded grow-shadow">
                  <h4>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                      . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                      . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                      . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                  </h4>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Doc1;