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

class Investments extends Component {

state = {
        minInvestOpen: false,
        catgryOpen: false,
        riskTypeOpen: false,
        popularityOpen: false,
    }

minInvestOpen() {
  this.setState({
      minInvestOpen: !this.state.minInvestOpen,
      catgryOpen: false,
      riskTypeOpen: false,
      popularityOpen: false,
  })
}
catgryOpen() {
  this.setState({
      catgryOpen: !this.state.catgryOpen,
      minInvestOpen: false,
      riskTypeOpen: false,
      popularityOpen: false,
  })
}
riskTypeOpen() {
  this.setState({
      riskTypeOpen: !this.state.riskTypeOpen,
      minInvestOpen: false,
      catgryOpen: false,
      popularityOpen: false,
  })
}
popularityOpen() {
  this.setState({
      popularityOpen: !this.state.popularityOpen,
      minInvestOpen: false,
      catgryOpen: false,
      riskTypeOpen: false,
  })
}
  render() {
    return (
      <div className="e-body">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav nav-tabs e-tab-nav-wrap" id="themesTab" role="tablist">
                  <li className="nav-item e-m-left-0">
                    <Link className="nav-link active e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/dashboard/investments"><span>Investments</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/dashboard/drafts"><span>Drafts</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/dashboard/watchlist"><span>Watchlist</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="tab-pane fade show active" id="explore" role="tabpanel" aria-labelledby="explore-tab">
          <div className="e-p-bottom-100">
            <div className="container">
              <div className="row"> 
                <div className="col-lg-5 col-md-12 col-12 offset-lg-7 e-p-bottom-20 e-p-top-20">
                  <div className="row">
                    <div className="col-lg-6 col-md-4 col-6 e-relative em-p-bottom-10 ">
                      {
                        this.state.catgryOpen ?
                          <div>
                            <div className="e-filter-drpdown active e-font-15 e-c-black e-f-weight-500 e-border-5" onClick={this.catgryOpen.bind(this)}>
                              <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-categories-icon" alt="Filter Risk"/>
                              Theme Type
                              <img className="e-m-left-10 e-ftheme-card-img e-up-arrow" alt="Down arrow"/>
                            </div>
                            <span className="e-absolute e-bg-white e-border-5 e-box-shadow-1 e-filter-items-wrap em-left e-min-invest-item-wrap">
                              <div className="e-filter-item ">
                                <div className="e-p-left-10">
                                  <input type="radio" name="tType" id="All" value="All"/>
                                  <label for="All">All</label>
                                </div>
                                <div className="e-p-left-10">
                                  <input type="radio" name="tType" id="Private" value="Private"/>
                                  <label for="Private">Private</label>
                                </div>
                                <div className="e-p-left-10">
                                  <input type="radio" name="tType" id="Public" value="Public"/>
                                  <label for="Public">Public</label>
                                </div>
                              </div>
                            </span>
                          </div>
                        :
                        <div className="e-filter-drpdown e-font-15 e-c-black e-border-5 e-f-weight-500" onClick={this.catgryOpen.bind(this)}>
                          <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-categories-icon" alt="Filter Risk"/>
                          Theme Type
                          <img className="e-m-left-10 e-ftheme-card-img e-down-arrow" alt="Down arrow"/>
                        </div>
                      }
                    </div>
                    <div className="col-lg-6 col-md-4 col-6 e-relative em-p-bottom-10 ">
                      
                      {
                        this.state.popularityOpen ?
                          <div>
                            <div className="e-filter-drpdown active e-font-15 e-c-black e-f-weight-500 e-border-5" onClick={this.popularityOpen.bind(this)}>
                              <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-popularity-icon" alt="Filter Popularity"/>
                              Popularity
                              <img className="e-m-left-10 e-ftheme-card-img e-up-arrow" alt="Down arrow"/>
                            </div>
                            <span className="e-absolute e-bg-white e-border-5 e-box-shadow-1 e-filter-items-wrap e-min-invest-item-wrap ">
                              <div className="e-filter-item e-p-left-10">
                                Profit First
                              </div>
                              <div className="e-filter-item e-p-left-10">
                                Loss First
                              </div>
                              <div className="e-filter-item e-p-left-10">
                                Latest First
                              </div>
                          </span>
                        </div>
                      :
                      <div className="e-filter-drpdown e-font-15 e-c-black e-f-weight-500 e-border-5" onClick={this.popularityOpen.bind(this)}>
                        <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-popularity-icon" alt="Filter Popularity"/>
                        Popularity
                        <img className="e-m-left-10 e-ftheme-card-img e-down-arrow" alt="Down arrow"/>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
              <div className="col-lg-12">
                <div className="row e-dsh-invst-card e-p-equal-20 e-m-bottom-30 e-card-hover e-border-5">
                  <div className="col-lg-1 col-md-2 col-sm-2 col-2 e-p-0">
                    <img className="e-dsh-invst-img e-m-bottom-10 e-m-max-width-full" src={cthemes4} alt="Themes by Fyers"/>
                    <span className="e-bg-light-gray e-letter-space-2 e-xx-s-txt e-td-rcmd-tag">PRIVATE</span>
                  </div>
                  <div className="col-lg-11 col-md-10 col-sm-10 col-12 em-no-p-left">
                    <div className="row e-p-bottom-10">
                      <div className="col-lg-10 e-tl-p-bottom-10">
                        <h4 className="e-c-black e-m-bottom-0 e-f-weight-500">Bargain Buys</h4>
                        <span className="e-s-txt e-c-grey ">Bought on Feb 12, 2019</span>
                      </div>
                      <div className="col-lg-2 e-align-right e-tl-text-left">
                        <a href="/" className="e-c-primary text-uppercase e-f-weight-600 e-a-primary-c">SEE ORDERS</a>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10 ">Current Value</div>
                        <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value">₹ 31405</span></h6>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Current Returns <span className="e-loss-value e-x-s-txt">0.1%</span></div>
                        <h6 className="e-card-p-txt e-c-red"><span className="e-dsh-top-card-value e-f-weight-500">₹ -50</span></h6>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Total Returns <span className="e-c-green e-x-s-txt">0.25%</span></div>
                        <h6 className="e-card-p-txt e-c-green e-f-weight-500"><span className="e-dsh-top-card-value">₹ 28405</span></h6>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12 e-align-right e-m-top-20 e-tl-text-left">
                        <a href="/" className="e-c-secondary text-uppercase e-f-weight-600 e-a-secondary-c e-m-right-20">START SIP</a>
                        <span className="e-s-btn e-m-right-20  e-s-btn-up-effect">SELL</span>
                        <span className="e-p-btn e-p-btn-up-effect">BUY</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row e-dsh-invst-card e-p-equal-20 e-m-bottom-30 e-card-hover e-border-5">
                  <div className="col-lg-1 col-md-2 col-sm-2 col-2 e-p-0">
                    <img className="e-dsh-invst-img e-m-bottom-10 e-m-max-width-full" src={ideaImage2} alt="Themes by Fyers"/>
                    <span className="e-bg-light-gray e-letter-space-2 e-xx-s-txt e-td-rcmd-tag">PRIVATE</span>
                  </div>
                  <div className="col-lg-11 col-md-10 col-sm-10 col-12 em-no-p-left">
                    <div className="row e-p-bottom-10">
                      <div className="col-lg-10 e-tl-p-bottom-10">
                        <h4 className="e-c-black e-m-bottom-0 e-f-weight-500">Automobile</h4>
                        <span className="e-s-txt e-c-grey ">Bought on Feb 09, 2019</span>
                      </div>
                      <div className="col-lg-2 e-align-right e-tl-text-left">
                        <a href="/" className="e-c-primary text-uppercase e-f-weight-600 e-a-primary-c">SEE ORDERS</a>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10 ">Current Value</div>
                        <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value">₹ 29405</span></h6>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Current Returns <span className="e-loss-value e-x-s-txt">0.1%</span></div>
                        <h6 className="e-card-p-txt e-c-red"><span className="e-dsh-top-card-value e-f-weight-500">₹ -1.50</span></h6>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Total Returns <span className="e-c-green e-x-s-txt">0.25%</span></div>
                        <h6 className="e-card-p-txt e-c-green e-f-weight-500"><span className="e-dsh-top-card-value">₹ 41200</span></h6>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12 e-align-right e-m-top-20 e-tl-text-left">
                        <a href="/" className="e-c-secondary text-uppercase e-f-weight-600 e-a-secondary-c e-m-right-20">START SIP</a>
                        <span className="e-s-btn e-m-right-20  e-s-btn-up-effect">SELL</span>
                        <span className="e-p-btn e-p-btn-up-effect">BUY</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-lg-12 e-align-right e-p-right-0">
                    <a href="/" className="e-c-primary text-uppercase e-f-weight-600 e-a-primary-c">SEE EXITED 2 ORDERS</a>
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

export default Investments;
