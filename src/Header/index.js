import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  /*UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
DropdownItem */} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div clssName="mt-0" style={{position:"fixed",zIndex:5,width:"100%"}}>       
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">TouchMyLike</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href={`${process.env.PUBLIC_URL}/#/`} className="text-white"><i className="fa fa-home" ariahidden="true"></i> - Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`${process.env.PUBLIC_URL}/#/ClassRoom`} className="text-white"><i className="fa fa-book" ariahidden="true"></i> - ClassRoom</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`${process.env.PUBLIC_URL}/#/About`} className="text-white"><i className="fa fa-commenting" ariahidden="true"></i> - About</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i className="fa fa-user fa-lg" ariahidden="ture"></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Login
                  </DropdownItem>
                  <DropdownItem>
                    Create account
                  </DropdownItem>
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Edit Profile
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div> 
    );
  }
}