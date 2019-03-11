/*Package importing*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ideaImage1 from '../../assets/images/fyers-themes-images-1.png';
import ideaImage2 from '../../assets/images/fyers-themes-images-2.png';
import ideaImage3 from '../../assets/images/fyers-themes-images-3.png';
import leftArrow from '../../assets/images/left-arrow.svg';
import publicTheme1 from '../../assets/images/publicTheme1.png';
import publicTheme2 from '../../assets/images/publicTheme2.png';
import publicTheme3 from '../../assets/images/publicTheme3.png';
import publicTheme4 from '../../assets/images/publicTheme4.png';
import news1 from '../../assets/images/news1.png';
import news4 from '../../assets/images/news4.png';
import news5 from '../../assets/images/news5.png';
import news6 from '../../assets/images/news6.png';
import news7 from '../../assets/images/news7.png';
import cthemes1 from '../../assets/images/cthemes1.png';
import cthemes2 from '../../assets/images/cthemes2.png';
import cthemes3 from '../../assets/images/cthemes3.png';
import cthemes4 from '../../assets/images/cthemes4.png';
import cthemes5 from '../../assets/images/cthemes5.png';
import cthemes6 from '../../assets/images/cthemes6.png';
import cthemes7 from '../../assets/images/cthemes7.png';
import cthemes8 from '../../assets/images/cthemes8.png';


import fyersThematicLogo from '../../assets/images/fyers-thematic-logo.png';
import Header from '../header.js';

class Draft extends Component {

  render() {
    return (
      <div className="e-body">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav nav-tabs e-tab-nav-wrap" id="themesTab" role="tablist">
                  <li className="nav-item e-m-left-0">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/dashboard/investments"><span>Investments</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/dashboard/drafts"><span>Drafts</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/dashboard/watchlist"><span>Watchlist</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="tab-pane fade show active e-p-top-30" id="explore" role="tabpanel" aria-labelledby="explore-tab">
          <div className="e-p-bottom-100">
            <div className="container">
              <div className="col-lg-12">
                <div className="row e-dsh-invst-card e-dsh-draft-card e-p-equal-20 e-m-bottom-30 e-card-hover e-border-5">
                  <div className="col-lg-1 col-md-2 col-sm-2 col-3 e-p-0">
                    <img className="e-dsh-invst-img e-m-bottom-10 e-m-max-width-full" src={cthemes7} alt="Themes by Fyers"/>
                  </div>
                  <div className="col-lg-11 col-md-10 col-sm-12 col-12">
                    <div className="row ">
                      <div className="col-lg-10">
                        <h4 className="e-c-black e-m-bottom-0 e-f-weight-500">Investicon</h4>
                        <span className="e-s-txt e-c-grey">Companies to invest successfully.</span>
                      </div>
                      <div className="col-lg-2 e-align-right">
                        <img className="e-remove-icon e-tl-remove-icon e-card-hover" alt="Themes by Fyers"/>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10 ">Current Value</div>
                        <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value">₹ 31405</span></h6>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Current Returns <span className="e-loss-value e-x-s-txt">0.1%</span></div>
                        <h6 className="e-card-p-txt"><span className="e-dsh-top-card-value e-f-weight-500">₹ -50</span></h6>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Total Returns <span className="e-c-green e-x-s-txt">0.25%</span></div>
                        <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value">₹ 28405</span></h6>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Index Value </div>
                        <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value">₹ 28405 <span className="e-c-red e-x-s-txt">0.25%</span></span></h6>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12 col-12 e-align-right e-m-top-20 e-m-text-left">
                        <a href="/" className="e-c-primary text-uppercase e-f-weight-600 e-a-primary-c e-m-right-20">CUSTOMIZE</a>
                        <span className="e-p-btn e-p-btn-up-effect e-f-weight-500">BUY THEME</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row e-dsh-invst-card e-dsh-draft-card e-p-equal-20 e-m-bottom-30 e-card-hover e-border-5">
                  <div className="col-lg-1 col-md-2 col-sm-2 col-3 e-p-0">
                    <img className="e-dsh-invst-img e-m-bottom-10 e-m-max-width-full" src={cthemes5} alt="Themes by Fyers"/>
                  </div>
                  <div className="col-lg-11 col-md-10 col-sm-12 col-12">
                    <div className="row ">
                      <div className="col-lg-10">
                        <h4 className="e-c-black e-m-bottom-0 e-f-weight-500">Automobile</h4>
                        <span className="e-s-txt e-c-grey">Companies to efficiently track & invest in Auto sector</span>
                      </div>
                      <div className="col-lg-2 e-align-right">
                        <img className="e-remove-icon e-tl-remove-icon e-icon-hover" alt="Themes by Fyers"/>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10 ">Current Value</div>
                        <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value">₹ 11000</span></h6>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Current Returns <span className="e-c-green e-x-s-txt">0.1%</span></div>
                        <h6 className="e-card-p-txt"><span className="e-dsh-top-card-value e-f-weight-500">₹ 10</span></h6>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Total Returns <span className="e-c-green e-x-s-txt">0.11%</span></div>
                        <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value">₹ 8405</span></h6>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10 ">Index Value </div>
                        <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value">₹ 11123 <span className="e-c-red e-x-s-txt">0.25%</span></span></h6>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12 col-12 e-align-right e-m-top-20 e-m-text-left">
                        <a href="/" className="e-c-primary text-uppercase e-f-weight-600 e-a-primary-c e-m-right-20">CUSTOMIZE</a>
                        <span className="e-p-btn e-p-btn-up-effect e-f-weight-500">BUY THEME</span>
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

export default Draft;
