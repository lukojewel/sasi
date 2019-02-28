/*Package importing*/
import React, { Component } from 'react';
import $ from 'jquery';

import ideaImage1 from '../assets/images/fyers-themes-images-1.png';
import fyersThematicLogo from '../assets/images/fyers-thematic-logo.png';

class ThemeDetail extends Component {

componentDidMount() {
  $("a").tooltip();
}
  render() {
    return (
      <div className="e-body">
        <header className="e-fixed e-bg-white">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img className="e-header-logo" src={fyersThematicLogo} alt="Fyers Logo"/>
              </div>
              <div className="col-6 e-align-right e-p-right-0">
                <a href="/" className="e-nav-item e-c-brown e-nav-item"><span className="e-search-icn"></span>Search</a>
                <a href="/discover" className="e-nav-item e-c-brown e-nav-item">Discover</a>
                <a href="/" className="e-nav-item e-c-brown e-nav-item">Login</a>
                <a href="/" className="e-nav-item e-c-primary e-nav-item e-f-weight-900">Open an account</a>
              </div>
            </div>
          </div>
        </header>
        
        <section className="e-p-top-130 e-p-bottom-50 e-td-top-card-bg">
          <div className="container">
            <div className="row">
              <div className="col-12 e-bg-white e-border-5 e-td-top-card e-p-equal-30 d-flex flex-row">
                <div className="col-2 e-p-0">
                  <div className="col-10 e-p-0">
                    <img className="e-m-bottom-10 e-td-theme-img" src={ideaImage1} alt="Themes by Fyers"/>
                    <span className="bg-gradient e-xx-s-txt e-c-white e-p-equal-20 e-td-rcmd-tag e-letter-space-2">RECOMMENDED</span>
                  </div>
                </div>
                <div className="col-6">
                  <h5 className="e-f-weight-600">Rising Rural Demand</h5>
                  <p className="e-card-p-txt e-p-overflow-ellipsis-2L e-c-grey">Consumption in rural India is growing at 1.5x the rate than in urban India. Budget 2018-2019 saw increase outlay of Rs 15000 crore. </p>
                  <div>
                    <span className="e-td-catgry-tag e-bg-light-gray e-m-right-20 e-x-s-txt e-c-brown">Sectoral</span>
                    <span className="e-td-catgry-tag e-bg-light-gray e-m-right-20 e-x-s-txt e-c-brown">Government Policy</span>
                  </div>
                  <div className="e-m-top-20">
                    <span className="e-p-btn e-p-normal-btn e-m-right-20 e-p-btn-up-effect">BUY THEME</span>
                    <span className="e-s-btn e-s-btn-up-effect e-s-normal-btn">CUSTOMIZE</span>
                    <span className="e-m-left-20">
                      <img className="e-wishlist-icon" alt="Wishlist"/>
                    </span>
                  </div>
                </div>
                <div className="col-4 e-border-5 e-p-0 e-td-values-card">
                  <div className="col-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                    <div className="e-s-txt e-f-weight-500 e-c-brown">Index Value 
                      <a href="/" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                        <img className="e-tooltip-icon" alt="Tooltip"/>
                      </a>
                    </div>
                    <div className="e-s-txt e-f-weight-600">314.05
                      <span className="e-loss-value e-x-s-txt"><img alt="loss"/>0.2%</span>
                    </div>
                  </div>
                  <div className="col-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                    <div className="e-s-txt e-f-weight-500 e-c-brown">Monthly Return
                      <a href="/" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                        <img className="e-tooltip-icon" alt="Tooltip"/>
                      </a>
                    </div>
                    <div className="e-s-txt e-f-weight-600 e-c-green">32.6%</div>
                  </div>
                  <div className="col-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                    <div className="e-s-txt e-f-weight-500 e-c-brown">Yearly Return
                      <a href="/" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                        <img className="e-tooltip-icon" alt="Tooltip"/>
                      </a>
                    </div>
                    <div className="e-s-txt e-f-weight-600 e-c-green">0.6%</div>
                  </div>
                  <div className="col-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                    <div className="e-s-txt e-f-weight-500 e-c-brown">Risk
                      <a href="/" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                        <img className="e-tooltip-icon" alt="Tooltip"/>
                      </a>
                    </div>
                    <div className="e-s-txt e-f-weight-600 e-c-yellow">Moderate</div>
                  </div>
                  <div className="col-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                    <div className="e-s-txt e-f-weight-500 e-c-brown">Min Investment
                      <a href="/" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                        <img className="e-tooltip-icon" alt="Tooltip"/>
                      </a>
                    </div>
                    <div className="e-s-txt e-f-weight-600 e-c-black">₹ 14500.00</div>
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
