/*Package importing*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ideaImage1 from '../../assets/images/fyers-themes-images-1.png';
import leftArrow from '../../assets/images/left-arrow.svg';
import publicTheme1 from '../../assets/images/publicTheme1.png';
import news1 from '../../assets/images/news1.png';
import fyersThematicLogo from '../../assets/images/fyers-thematic-logo.png';

import Header from '../header.js';
import DetailCTA from '../detail-cta.js';

class DiscoverExplore extends Component {

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
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="nav nav-tabs e-tab-nav-wrap" id="themesTab" role="tablist">
                  <li className="nav-item e-m-left-0">
                    <Link className="nav-link active e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/discover/explore"><span>Explore</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/discover/fyers-themes"><span>Fyers Themes</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/discover/public-themes"><span>Public Themes</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="tab-pane fade show active" id="explore" role="tabpanel" aria-labelledby="explore-tab">
          <div className="e-dvr-explr-wrap e-p-bottom-100">
            <div className="container">
              <div className="tab-content e-p-top-50 e-p-bottom-50" id="themesTabContent">
                <h5 className="e-sec-head e-c-black e-p-bottom-50">HIGHLY <span className="e-c-grey">RECOMMENDED</span></h5>
                <div className="col-lg-12">
                    <div className="row ">
                      <div className="col-lg-6 e-p-left-0"> 
                        <div className="col-lg-12 e-bg-white e-ftheme-card-wrap e-card-hover">
                          <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                              <h4 className="e-f-weight-600">Energy takeout targets</h4>
                              <p className="e-card-p-txt e-p-bottom-10 e-c-brown ">This is to gain exposure to mergers & acquisitions activity among oil & gas companies. Get a complete picture of the energy investment section and decid.</p>
                              <div className="row">
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                    Yearly Return <span className="e-c-green e-f-weight-500"> 25.5%</span>
                                  </p> 
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                                  <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                    Monthly Return <span className="e-c-green e-f-weight-500"> 5.6%</span>
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                    Min Investment <span className="e-c-black e-f-weight-500"> ₹14500.00</span>
                                  </p>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                    Risk <span className="e-c-red e-f-weight-500"> High</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                              <img className="e-ftheme-card-img e-m-bottom-10 e-m-max-width-full" src={ideaImage1} alt="Themes by Fyers"/>
                            </div>
                          </div>
                        </div>
                      </div> {/*Responsive*/}
                      <div className="col-lg-6 e-p-left-0 e-tl-no-flex-display-none"> 
                        <div className="col-12 e-bg-white e-ftheme-card-wrap e-card-hover">
                          <div className="row">
                            <div className="col-lg-8">
                              <h4 className="e-f-weight-600">Energy takeout targets</h4>
                              <p className="e-card-p-txt e-p-bottom-10 e-c-brown ">This is to gain exposure to mergers & acquisitions activity among oil & gas companies. Get a complete picture of the energy investment section and decid.</p>
                              <div className="row">
                                <div className="col-lg-7">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                    Yearly Return <span className="e-c-green e-f-weight-500"> 25.5%</span>
                                  </p> 
                                </div>
                                <div className="col-lg-5">
                                  <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                    Monthly Return <span className="e-c-green e-f-weight-500"> 5.6%</span>
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-7">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                    Min Investment <span className="e-c-black e-f-weight-500"> ₹14500.00</span>
                                  </p>
                                </div>
                                <div className="col-lg-5">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                    Risk <span className="e-c-red e-f-weight-500"> High</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <img className="e-ftheme-card-img e-m-bottom-10" src={ideaImage1} alt="Themes by Fyers"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="e-card-arrow-wrap"> 
                    <span className="e-m-right-20">
                      <img className="e-ftheme-card-img" src={leftArrow} alt="Left arrow"/>
                    </span>
                    <span className="e-hover-white-shadow active">
                      <img className="e-ftheme-card-img e-right-arrow" src={leftArrow} alt="Right arrow"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="e-p-bottom-100 e-p-top-100 e-dvr-t-perfom-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-7">
                  <h5 className="e-sec-head e-c-black">TOP PERFORMING <span className="e-c-grey">THEMES</span></h5>
                </div>
                <img className="e-top-theme-pattern-img-1" alt="Fyers pattern"/>
              </div>
              <div className="col-lg-12 e-p-top-50 e-ptheme-items-wrap e-p-left-0">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="e-ptheme-card-wrap e-card-hover e-p-bottom-10">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="d-flex flex-row justify-content-between">
                        <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                        <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                          Monthly Return <span className="e-c-green e-f-weight-500"> 5.6%</span>
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between"><p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                          Min Investment <span className="e-c-black e-f-weight-500"> ₹14500.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 em-tablet-display-none">
                    <div className="e-ptheme-card-wrap e-card-hover e-p-bottom-10">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="d-flex flex-row justify-content-between">
                        <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                        <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                          Monthly Return <span className="e-c-green e-f-weight-500"> 5.6%</span>
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between"><p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                          Min Investment <span className="e-c-black e-f-weight-500"> ₹14500.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 e-tl-no-flex-display-none em-tablet-display-none">
                    <div className="e-ptheme-card-wrap e-card-hover e-p-bottom-10">
                      <img className="e-m-bottom-10 e-border-5 e-full-width" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="d-flex flex-row justify-content-between">
                        <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                        <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                          Monthly Return <span className="e-c-green e-f-weight-500"> 5.6%</span>
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between"><p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                          Min Investment <span className="e-c-black e-f-weight-500"> ₹14500.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 e-tl-no-flex-display-none">
                    <div className="e-ptheme-card-wrap e-card-hover e-p-bottom-10">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="d-flex flex-row justify-content-between">
                        <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                        <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                          Monthly Return <span className="e-c-green e-f-weight-500"> 5.6%</span>
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between"><p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                          Min Investment <span className="e-c-black e-f-weight-500"> ₹14500.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="e-top-theme-pattern-img-2" alt="Fyers pattern"/>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="e-card-arrow-wrap e-relative"> 
                    <span className="e-m-right-20">
                      <img className="e-ftheme-card-img" src={leftArrow} alt="Left arrow"/>
                    </span>
                    <span className="active">
                      <img className="e-ftheme-card-img e-right-arrow" src={leftArrow} alt="Right arrow"/>
                    </span> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="e-p-bottom-100 e-p-top-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-7">
                  <h5 className="e-sec-head e-c-black e-p-bottom-20">RECENTLY<span className="e-c-grey">VIEWED</span></h5>
                </div>
              </div>
              <div className="col-lg-12 e-p-top-20 e-ptheme-items-wrap e-p-left-0">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5 e-full-width" src={news1} alt="Themes by Fyers"/>
                      <h4 className="e-p-bottom-20 e-f-weight-600">Benefits of Investing in a Diversified Portfolio</h4>
                      <div className="d-flex flex-row justify-content-between">
                        <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                        <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                          Monthly Return <span className="e-c-green e-f-weight-500"> 5.6%</span>
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300">
                          Min Investment <span className="e-c-black e-f-weight-500"> ₹14500.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 em-tablet-display-none">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5" src={news1} alt="Themes by Fyers"/>
                      <h4 className="e-p-bottom-20 e-f-weight-600">Benefits of Investing in a Diversified Portfolio</h4>
                      <div className="d-flex flex-row justify-content-between">
                        <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                        <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                          Monthly Return <span className="e-c-green e-f-weight-500"> 5.6%</span>
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300">
                          Min Investment <span className="e-c-black e-f-weight-500"> ₹14500.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 e-tl-no-flex-display-none ">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5" src={news1} alt="Themes by Fyers"/>
                      <h4 className="e-p-bottom-20 e-f-weight-600">Benefits of Investing in a Diversified Portfolio</h4>
                      <div className="d-flex flex-row justify-content-between">
                        <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                        <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                          Monthly Return <span className="e-c-green e-f-weight-500"> 5.6%</span>
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300">
                          Min Investment <span className="e-c-black e-f-weight-500"> ₹14500.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 e-tl-no-flex-display-none">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5" src={news1} alt="Themes by Fyers"/>
                      <h4 className="e-p-bottom-20 e-f-weight-600">Benefits of Investing in a Diversified Portfolio</h4>
                      <div className="d-flex flex-row justify-content-between">
                        <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                        <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                          Monthly Return <span className="e-c-green e-f-weight-500"> 5.6%</span>
                        </p>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300">
                          Min Investment <span className="e-c-black e-f-weight-500"> ₹14500.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="e-card-arrow-wrap e-relative"> 
                    <span className="e-m-right-20">
                      <img className="e-ftheme-card-img" src={leftArrow} alt="Left arrow"/>
                    </span>
                    <span className="active">
                      <img className="e-ftheme-card-img e-right-arrow" src={leftArrow} alt="Right arrow"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="e-p-bottom-100 e-p-top-100 e-bg-light-gray">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-7">
                  <h5 className="e-sec-head e-c-black e-p-bottom-50">THEME <span className="e-c-grey">COLLECTIONS</span></h5>
                </div>
              </div>
              <div className="col-lg-12 e-hm-why-items-wrap e-dvr-t-collection-wrap e-p-0">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="d-flex flex-row e-p-equal-15 e-dv-s-believes-causes-wrap e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <div className="col-lg-3 col-md-3 col-sm-2 col-2 e-p-0">
                        <img alt="Easy & simple method to invest"/>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-8 e-p-right-0 e-p-0 ">
                        <p className="e-c-black e-m-bottom-0">Social Believes & Causes</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 24 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="d-flex flex-row e-p-equal-15 e-dv-investStrategies-wrap e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <div className="col-lg-3 col-md-3 col-sm-2 col-2 e-p-0">
                        <img alt="Easy & simple method to invest"/>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-8 e-p-right-0 e-p-0 ">
                        <p className="e-c-black e-m-bottom-0">Investing Strategies</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 24 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="d-flex flex-row e-p-equal-15 e-dv-dividends-wrap e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <div className="col-lg-3 col-md-3 col-sm-2 col-2 e-p-0">
                        <img alt="Easy & simple method to invest"/>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-8 e-p-right-0 e-p-0 ">
                        <p className="e-c-black e-m-bottom-0">Dividends & Income</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 24 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="d-flex flex-row e-p-equal-15 e-dv-geographic-wrap e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <div className="col-lg-3 col-md-3 col-sm-2 col-2 e-p-0">
                        <img alt="Easy & simple method to invest"/>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-8 e-p-right-0 e-p-0 ">
                        <p className="e-c-black e-m-bottom-0">Geographic Collections</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 24 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="d-flex flex-row e-p-equal-15 e-dv-government-wrap e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <div className="col-lg-3 col-md-3 col-sm-2 col-2 e-p-0">
                        <img alt="Easy & simple method to invest"/>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-8 e-p-right-0 e-p-0 ">
                        <p className="e-c-black e-m-bottom-0">Government Policies</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 24 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="d-flex flex-row e-p-equal-15 e-dv-trackers-wrap e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <div className="col-lg-3 col-md-3 col-sm-2 col-2 e-p-0">
                        <img alt="Easy & simple method to invest"/>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-8 e-p-right-0 e-p-0 ">
                        <p className="e-c-black e-m-bottom-0">Sectional Trackers</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 24 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="d-flex flex-row e-p-equal-15 e-dv-trends-wrap e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <div className="col-lg-3 col-md-3 col-sm-2 col-2 e-p-0">
                        <img alt="Easy & simple method to invest"/>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-8 e-p-right-0 e-p-0 ">
                        <p className="e-c-black e-m-bottom-0">Current Trends</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 24 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="d-flex flex-row e-p-equal-15 e-dv-conglomerates-wrap e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <div className="col-lg-3 col-md-3 col-sm-2 col-2 e-p-0">
                        <img alt="Easy & simple method to invest"/>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-8 e-p-right-0 e-p-0 ">
                        <p className="e-c-black e-m-bottom-0">Groups & Conglomerates</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 24 Themes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="e-p-bottom-100 e-p-top-100 ">
            <img className="e-top-theme-pattern-img-1 e-dvr-explr-ctheme-pattern" alt="Fyers pattern"/>
            <div className="container">
              <div className="row e-p-bottom-10">
                <div className="col-lg-6">
                  
                  </div>
                <div className="col-lg-6">
                  
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <h5 className="e-sec-head e-c-black e-p-bottom-40 e-f-para">BEST PERFORMING <br/><span className="e-c-grey">COMMUNITY THEMES</span></h5>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Use of plastic</h5>
                       <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Yearly Return <span className="e-c-green e-f-weight-600">25.5%</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Monthly Return <span className="e-c-green e-f-weight-600">5.6%</span>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 em-p-bottom-10">
                              Min Investment <span className="e-c-black e-f-weight-600">₹14500.00</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300">
                              Risk <span className="e-c-red e-f-weight-600">High</span>
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={ideaImage1} alt="Themes by Fyers"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Use of plastic</h5>
                       <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Yearly Return <span className="e-c-green e-f-weight-600">25.5%</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Monthly Return <span className="e-c-green e-f-weight-600">5.6%</span>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 em-p-bottom-10">
                              Min Investment <span className="e-c-black e-f-weight-600">₹14500.00</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300">
                              Risk <span className="e-c-red e-f-weight-600">High</span>
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={ideaImage1} alt="Themes by Fyers"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Use of plastic</h5>
                       <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Yearly Return <span className="e-c-green e-f-weight-600">25.5%</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Monthly Return <span className="e-c-green e-f-weight-600">5.6%</span>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 em-p-bottom-10">
                              Min Investment <span className="e-c-black e-f-weight-600">₹14500.00</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300">
                              Risk <span className="e-c-red e-f-weight-600">High</span>
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={ideaImage1} alt="Themes by Fyers"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Use of plastic</h5>
                       <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Yearly Return <span className="e-c-green e-f-weight-600">25.5%</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Monthly Return <span className="e-c-green e-f-weight-600">5.6%</span>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 em-p-bottom-10">
                              Min Investment <span className="e-c-black e-f-weight-600">₹14500.00</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300">
                              Risk <span className="e-c-red e-f-weight-600">High</span>
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={ideaImage1} alt="Themes by Fyers"/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 em-p-top-30">
                  <h5 className="e-sec-head e-c-black e-p-bottom-40 e-f-para">LATEST <br/><span className="e-c-grey">COMMUNITY THEMES</span></h5>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Use of plastic</h5>
                       <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Yearly Return <span className="e-c-green e-f-weight-600">25.5%</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Monthly Return <span className="e-c-green e-f-weight-600">5.6%</span>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 em-p-bottom-10">
                              Min Investment <span className="e-c-black e-f-weight-600">₹14500.00</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300">
                              Risk <span className="e-c-red e-f-weight-600">High</span>
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={ideaImage1} alt="Themes by Fyers"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Use of plastic</h5>
                       <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Yearly Return <span className="e-c-green e-f-weight-600">25.5%</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Monthly Return <span className="e-c-green e-f-weight-600">5.6%</span>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 em-p-bottom-10">
                              Min Investment <span className="e-c-black e-f-weight-600">₹14500.00</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300">
                              Risk <span className="e-c-red e-f-weight-600">High</span>
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={ideaImage1} alt="Themes by Fyers"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Use of plastic</h5>
                       <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Yearly Return <span className="e-c-green e-f-weight-600">25.5%</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Monthly Return <span className="e-c-green e-f-weight-600">5.6%</span>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 em-p-bottom-10">
                              Min Investment <span className="e-c-black e-f-weight-600">₹14500.00</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300">
                              Risk <span className="e-c-red e-f-weight-600">High</span>
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={ideaImage1} alt="Themes by Fyers"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Use of plastic</h5>
                       <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Yearly Return <span className="e-c-green e-f-weight-600">25.5%</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Monthly Return <span className="e-c-green e-f-weight-600">5.6%</span>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300 em-p-bottom-10">
                              Min Investment <span className="e-c-black e-f-weight-600">₹14500.00</span>
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <p className="e-card-pl-txt e-m-0 e-c-brown e-f-weight-300">
                              Risk <span className="e-c-red e-f-weight-600">High</span>
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={ideaImage1} alt="Themes by Fyers"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <DetailCTA/>
      </div> 
    ); 
  } 
}

export default DiscoverExplore;
