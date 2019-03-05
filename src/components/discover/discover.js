/*Package importing*/
import React, { Component } from 'react';
import ideaImage1 from '../../assets/images/fyers-themes-images-1.png';
import leftArrow from '../../assets/images/left-arrow.svg';
import publicTheme1 from '../../assets/images/publicTheme1.png';
import news1 from '../../assets/images/news1.png';
import fyersThematicLogo from '../../assets/images/fyers-thematic-logo.png';

import Header from '../header.js';
import DetailCTA from '../detail-cta.js';

class Discover extends Component {

state = {
        minInvestOpen: false,
        catgryOpen: false,
        riskTypeOpen: false,
        popularityOpen: false,
    }

minInvestOpen() {
  this.setState({
      minInvestOpen: !this.state.minInvestOpen
  })
}
catgryOpen() {
  this.setState({
      catgryOpen: !this.state.catgryOpen
  })
}
riskTypeOpen() {
  this.setState({
      riskTypeOpen: !this.state.riskTypeOpen
  })
}
popularityOpen() {
  this.setState({
      popularityOpen: !this.state.popularityOpen
  })
}
  render() {
    return (
      <div className="e-body">
        <Header/>
        
        <section className="e-p-top-100 ">
          <div className="container e-vh-50 d-flex align-items-center">
            <div className="row">
              <div className="col-12">
                <h6 className="e-c-primary e-letter-space e-s-txt e-p-bottom-10 e-f-weight-600">THEMES</h6>
                <h2 className="e-p-bottom-10 e-banner-head">Discover <span className="e-c-grey">Themes</span></h2>
                <h5 className="e-c-brown">Our products are built for long term performance.</h5>
              </div>
            </div>
          </div>
        </section>
      </div> 
    ); 
  } 
}

export default Discover;
