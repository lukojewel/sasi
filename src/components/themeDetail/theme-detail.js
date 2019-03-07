/*Package importing*/
import React, { Component } from 'react';
import $ from 'jquery';

import ideaImage1 from '../../assets/images/fyers-themes-images-1.png';
import fyersThematicLogo from '../../assets/images/fyers-thematic-logo.png';

import Header from '../header.js';

class ThemeDetail extends Component {
constructor(props){
  super(props);
  this.state = {
      wishlisted: false,
      scrolling: false,
  }
}
componentDidMount() {
  $("a").tooltip();
  window.addEventListener('scroll', this.handleScroll.bind(this));
}
componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll.bind(this));
}

handleScroll(event) {
  if(window.scrollY <= 300 && this.state.scrolling === true){
    this.setState({
      scrolling: false
    })
  }
  else if (window.scrollY >300 && this.state.scrolling !== true){
    this.setState({
      scrolling: true
    })
  }
}

whishlistClick() {
  this.setState({
      wishlisted: !this.state.wishlisted
  })
}

  render() {
    return (
      <div className="e-body">
        <Header/>
            <section className="e-bg-white e-td-profile-fixed e-fixed e-full-width " style={{opacity: this.state.scrolling ? 1: 0}}>
              <div className="container">
                <div className="row em-tablet-display-none">
                  <div className="col-lg-1 col-md-1 e-p-right-0 ">
                    <img className="e-td-theme-img e-full-width" src={ideaImage1} alt="Themes by Fyers"/>
                  </div>
                  <div className="col-lg-8 col-md-7 em-tablet-display-none">
                    <h4 className="e-f-weight-600 e-m-0">Energy takeout targets</h4>
                    <div className="d-flex flex-row">
                      <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 e-p-right-30">Index Value <span className="e-c-black e-f-weight-500"> 314.05<span className="e-loss-value e-x-s-txt"><img alt="loss"/>0.2%</span></span></p>
                      <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 e-p-right-30">Monthly Return <span className="e-c-green e-f-weight-500"> 32.6%</span></p>
                      <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 e-p-right-30">Yearly Return <span className="e-c-green e-f-weight-500"> 0.6%</span></p>
                    </div>
                    <div className="d-flex flex-row">
                      <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 e-p-right-30">Risk <span className="e-c-yellow e-f-weight-500"> Moderate</span></p>
                      <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 e-p-right-30">Min Investment <span className="e-c-black e-f-weight-500"> ₹ 14500.00</span></p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-12 e-align-right em-tablet-display-none">
                    <div className="e-align-right e-p-bottom-10" >
                      <span className="e-p-right-20">
                        {
                          this.state.wishlisted ?
                          <img className="e-wishlist-icon-filled " onClick={this.whishlistClick.bind(this)} alt="Wishlist"/>
                          :
                          <img className="e-wishlist-icon" onClick={this.whishlistClick.bind(this)} alt="Wishlist"/>
                        }
                      </span>
                      <span className="e-p-btn e-p-normal-btn e-p-btn-up-effect e-f-weight-500 ">BUY THEME</span>
                    </div>
                    <a href="/" className="e-c-primary text-uppercase e-f-weight-600 e-a-primary-c e-font-13">CUSTOMIZE</a>
                  </div>
                </div>
                <div className="row e-mobile-hide e-tablet-hide">
                    <div className="col-sm-12 col-12">
                      <span className="e-p-btn e-p-normal-btn e-p-btn-up-effect e-f-weight-500 e-m-right-20">BUY THEME</span>
                      <span className="e-s-btn e-s-normal-btn e-p-btn-up-effect e-f-weight-500 ">CUSTOMIZE</span>
                    </div>
                </div>
              </div>
            </section>


        
            <section className="e-p-top-130 e-p-bottom-50 e-td-top-card-bg" style={{opacity: this.state.scrolling ? 0 : 1}}>
              <div className="container">
                <div className="row em-m-10">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 e-bg-white e-border-5 e-td-top-card e-p-equal-30 ">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-3 col-5">
                        <div className="col-10 e-p-0">
                          <img className="e-m-bottom-10 e-td-theme-img" src={ideaImage1} alt="Themes by Fyers"/>
                          <span className="bg-gradient e-xx-s-txt e-c-white e-p-equal-20 e-td-rcmd-tag e-letter-space-2">RECOMMENDED</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-9 col-12 em-p-bottom-30 em-no-p-left em-p-left-15">
                        <h5 className="e-f-weight-600">Rising Rural Demand</h5>
                        <p className="e-card-p-txt e-p-overflow-ellipsis-2L e-c-grey">Consumption in rural India is growing at 1.5x the rate than in urban India. Budget 2018-2019 saw increase outlay of Rs 15000 crore. </p>
                        <div>
                          <span className="e-td-catgry-tag e-bg-light-gray e-m-right-20 e-x-s-txt e-c-brown">Sectoral</span>
                          <span className="e-td-catgry-tag e-bg-light-gray e-m-right-20 e-x-s-txt e-c-brown">Government Policy</span>
                        </div>
                        <div className="e-m-top-20">
                          <span className="e-p-btn e-p-normal-btn e-m-right-20 e-p-btn-up-effect e-f-weight-500">BUY THEME</span>
                          <span className="e-s-btn e-s-btn-up-effect e-s-normal-btn e-f-weight-500">CUSTOMIZE</span>
                          <span className="e-m-left-20">
                          {
                            this.state.wishlisted ?
                            <img className="e-wishlist-icon-filled " onClick={this.whishlistClick.bind(this)} alt="Wishlist"/>
                            :
                            <img className="e-wishlist-icon" onClick={this.whishlistClick.bind(this)} alt="Wishlist"/>
                          } 
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="e-border-5 e-td-values-card">
                          <div className="col-lg-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                            <div className="e-s-txt e-f-weight-500 e-c-brown">Index Value 
                              <a className="e-no-animation" href="/" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                                <img className="e-tooltip-icon" alt="Tooltip"/>
                              </a>
                            </div>
                            <div className="e-s-txt e-f-weight-600">314.05
                              <span className="e-loss-value e-x-s-txt"><img alt="loss"/>0.2%</span>
                            </div>
                          </div>
                          <div className="col-lg-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                            <div className="e-s-txt e-f-weight-500 e-c-brown">Monthly Return
                              <a className="e-no-animation" href="/" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                                <img className="e-tooltip-icon" alt="Tooltip"/>
                              </a>
                            </div>
                            <div className="e-s-txt e-f-weight-600 e-c-green">32.6%</div>
                          </div>
                          <div className="col-lg-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                            <div className="e-s-txt e-f-weight-500 e-c-brown">Yearly Return
                              <a className="e-no-animation" href="/" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                                <img className="e-tooltip-icon" alt="Tooltip"/>
                              </a>
                            </div>
                            <div className="e-s-txt e-f-weight-600 e-c-green">0.6%</div>
                          </div>
                          <div className="col-lg-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                            <div className="e-s-txt e-f-weight-500 e-c-brown">Risk
                              <a className="e-no-animation" href="/" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                                <img className="e-tooltip-icon" alt="Tooltip"/>
                              </a>
                            </div>
                            <div className="e-s-txt e-f-weight-600 e-c-yellow">Moderate</div>
                          </div>
                          <div className="col-lg-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                            <div className="e-s-txt e-f-weight-500 e-c-brown">Min Investment
                              <a className="e-no-animation" href="/" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                                <img className="e-tooltip-icon" alt="Tooltip"/>
                              </a>
                            </div>
                            <div className="e-s-txt e-f-weight-600 e-c-black">₹ 14500.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        

        

      </div> 
    ); 
  } 
}
export default ThemeDetail;
