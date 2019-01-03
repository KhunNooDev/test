import React from 'react'

export default class Footer extends React.Component {
  constructor (props) {
    super(props);
  
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      link1:'/',
      link2:'/',
      link3:'/',
      facebookURL:'https://www.facebook.com/TouchMyLikeStudio',
      youtubeURL:'https://bit.ly/2S3b9jk',
    }
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
    }
  render() {
    return (
        <footer id="footer">
            <div className="container">
              <div className="row text-center text-xs-center text-sm-left text-md-left">
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links">
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>About</a></li>
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>Videos</a></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links">
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>About</a></li>
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>Videos</a></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links">
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>About</a></li>
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                    <li><a href="/"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 sm-5">
                  <ul className="list-unstyled list-inline social text-center">
                    <li className="list-inline-item"><a href={this.state.facebookURL} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href={this.state.youtubeURL} target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a></li>
                    <li className="list-inline-item"><a href="/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                    <li className="list-inline-item"><a href="/" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a></li>
                  </ul>
                </div>
              </div>	
              <div className="row">
                {/* <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center">
                <ButtonDropdown direction="up" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                      <DropdownToggle caret><i className="fa fa-language" ariahidden="true"></i> เปลี่ยนภาษา</DropdownToggle>
                      <DropdownMenu>
                          <DropdownItem>ภาษาไทย</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>English</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                </div> */}
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                  <p><u><a href="/">TouchMyLike</a></u> is ....................................................  </p>
                  <p><i className="fa fa-copyright"></i> All right Reversed.</p>
                </div>
              </div>
            </div>
          </footer>
    );
  }
}