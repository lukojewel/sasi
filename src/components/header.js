/*Package importing*/
import React, { Component } from 'react';
import fyersThematicLogo from '../assets/images/fyers-thematic-logo.png';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
        searchBoxShow: false,
        skeyward: "",
        mMenuCliked: false,
    }
  }
  searchClick(e){  
    e.preventDefault();
    this.setState({ searchBoxShow: true});
  }
  searchClickReturn(e){  
    e.preventDefault();
    if(this.state.skeyward == ""){this.setState({ searchBoxShow: false});}
  }
  mMenuClick(e){  
    e.preventDefault();
    this.setState({ mMenuCliked: !this.state.mMenuCliked});
  }
  
  searchChange(e){  this.setState({ skeyward: e.target.value}) }

  render() {
    return (
      <div>
        <header className="e-fixed e-bg-white e-desktop-hide">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5">
                <a className="e-no-animation" href="/"> 
                  <img className="e-header-logo" src={fyersThematicLogo} alt="Fyers Logo"/>
                </a>
              </div>
              <div className="col-lg-6 col-md-7 e-align-right e-p-right-0 m-linkitem">
                {
                  this.state.searchBoxShow ?
                    <span className="">
                      <span className="e-search-icn"></span>
                      <input type="text" name="fanme" className="e-nav-search-input" onChange={this.searchChange.bind(this)} value={this.state.skeyward} placeholder="Search themes" onBlur={this.searchClickReturn.bind(this)} autoFocus={true} />
                    </span>
                  :
                    <span onClick={this.searchClick.bind(this)} className="e-nav-search-item">
                      <span className="e-search-icn"></span>
                      <a href="/" className="e-nav-item e-c-brown e-nav-item e-m-left-0">Search</a>
                    </span>
                }
                <a href="/discover/explore" className="e-nav-item e-c-brown e-nav-item">Discover</a>
                <a href="/" className="e-nav-item e-c-brown e-nav-item">Login</a>
                <a href="/" className="e-nav-item e-c-primary e-nav-item e-f-weight-900 e-m-right-0 e-a-primary-c">Open an account</a>
              </div>
            </div>
          </div>
        </header>
        <div className="navbar navbar-inverse navbar-fixed-top e-m-navbar e-mobile-hide e-tablet-hide">
          <div className="container">
            <div className="navbar-header d-flex justify-content-between e-full-width">
              <div>
                <a className="e-no-animation" href="/"> 
                  <img className="e-header-logo" src={fyersThematicLogo} alt="Fyers Logo"/>
                </a>
              </div>

              <div>
                <span className="e-nav-search-item e-inline-block e-nav-fixed-search">
                  <span className="e-search-icn"></span>
                </span>
                <div className="e-inline-block" onClick={this.mMenuClick.bind(this)}>
                  
                  {
                    this.state.mMenuCliked ?
                      <button type="button" className="navbar-toggle navbar-close" data-toggle="collapse" data-target=".navbar-collapse"></button>
                    :
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"></button>
                  }
                </div>
              </div>
            </div>
            <div className="navbar-collapse collapse e-navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="/discover/explore" className="e-nav-item e-c-brown e-nav-item">Discover</a>
                
                </li>
                <li className="dropdown">
                  <a href="/" className="e-nav-item e-c-brown e-nav-item">Login</a>
                
                </li>
                <li className="dropdown">
                  <a href="/" className="e-nav-item e-c-primary e-nav-item e-f-weight-900 e-m-right-0 e-a-primary-c">Open an account</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ); 
  } 
}

export default Header;
