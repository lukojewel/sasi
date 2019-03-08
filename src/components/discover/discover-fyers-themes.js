/*Package importing*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ideaImage1 from '../../assets/images/fyers-themes-images-1.png';
import leftArrow from '../../assets/images/left-arrow.svg';
import publicTheme1 from '../../assets/images/publicTheme1.png';
import news1 from '../../assets/images/news1.png';
import fyersThematicLogo from '../../assets/images/fyers-thematic-logo.png';
import cthemes1 from '../../assets/images/cthemes1.png';
import cthemes2 from '../../assets/images/cthemes2.png';
import cthemes3 from '../../assets/images/cthemes3.png';
import cthemes4 from '../../assets/images/cthemes4.png';
import cthemes5 from '../../assets/images/cthemes5.png';
import cthemes6 from '../../assets/images/cthemes6.png';
import cthemes7 from '../../assets/images/cthemes7.png';
import cthemes8 from '../../assets/images/cthemes8.png';

import Header from '../header.js';
import DetailCTA from '../detail-cta.js';

class DiscoverFyersThemes extends Component {

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
              <div className="col-12">
                <ul className="nav nav-tabs e-tab-nav-wrap" id="themesTab" role="tablist">
                  <li className="nav-item e-m-left-0">
                    <Link className="nav-link  e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/discover/explore"><span>Explore</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/discover/fyers-themes"><span>Fyers Themes</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/discover/public-themes"><span>Public Themes</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="tab-pane fade show e-p-bottom-100 e-p-top-20" id="fthemes" role="tabpanel" aria-labelledby="fthemes-tab">
          <div className="container">
            <div className="row"> 
              <div className="col-lg-8 col-md-12 col-12 offset-lg-4 e-p-bottom-20 ">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-6 e-relative em-p-bottom-10">
                    {
                      this.state.minInvestOpen ?
                        <div>
                          <div className="e-filter-drpdown active e-font-15 e-f-weight-500 e-c-black e-border-5" onClick={this.minInvestOpen.bind(this)}>
                            <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-minInvest-icon" alt="Filter Risk"/>
                            Min Investment
                            <img className="e-m-left-10 e-ftheme-card-img e-up-arrow" alt="Down arrow"/>
                          </div>
                          <span className="e-absolute e-bg-white e-border-5 e-box-shadow-1 e-filter-items-wrap em-left e-min-invest-item-wrap">
                            <div className="e-filter-item">
                              <input id="minInvest-1" type="checkbox" placeholder="hey"/>
                              <label for="minInvest-1">Less than 5000</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="minInvest-2" type="checkbox" placeholder="hey"/>
                              <label for="minInvest-2">5000 - 10000</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="minInvest-3" type="checkbox" placeholder="hey"/>
                              <label for="minInvest-3">10000 - 20000</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="minInvest-4" type="checkbox" placeholder="hey"/>
                              <label for="minInvest-4">20000 - 30000</label>
                            </div>
                          </span>
                        </div>
                      :
                      <div className="e-filter-drpdown e-font-15 e-c-black e-border-5 e-f-weight-500" onClick={this.minInvestOpen.bind(this)}>
                        <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-minInvest-icon" alt="Filter Risk"/>
                        Min Investment
                        <img className="e-m-left-10 e-ftheme-card-img e-down-arrow" alt="Down arrow"/>
                      </div>
                    }
                  </div>
                  <div className="col-lg-4 col-md-4 col-6 e-relative em-p-bottom-10">
                    {
                      this.state.catgryOpen ?
                        <div>
                          <div className="e-filter-drpdown active e-font-15 e-c-black e-f-weight-500 e-border-5" onClick={this.catgryOpen.bind(this)}>
                            <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-categories-icon" alt="Filter Risk"/>
                            Categories
                            <img className="e-m-left-10 e-ftheme-card-img e-up-arrow" alt="Down arrow"/>
                          </div>
                          <span className="e-absolute e-bg-white e-border-5 e-box-shadow-1 e-filter-items-wrap e-min-invest-item-wrap">
                            <div className="e-filter-item">
                              <input id="catgry-1" type="checkbox" placeholder="hey"/>
                              <label for="catgry-1">All</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="catgry-2" type="checkbox" placeholder="hey"/>
                              <label for="catgry-2">Banking</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="catgry-3" type="checkbox" placeholder="hey"/>
                              <label for="catgry-3">Automobile</label>
                            </div>
                          </span>
                        </div>
                      :
                      <div className="e-filter-drpdown e-font-15 e-c-black e-border-5 e-f-weight-500" onClick={this.catgryOpen.bind(this)}>
                        <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-categories-icon" alt="Filter Risk"/>
                        Categories
                        <img className="e-m-left-10 e-ftheme-card-img e-down-arrow" alt="Down arrow"/>
                      </div>
                    }
                  </div>
                  {/*<div className="col-lg-3 col-md-3 col-6 e-relative em-p-bottom-10">
                    {
                      this.state.riskTypeOpen ?
                        <div>
                          <div className="e-filter-drpdown active e-font-15 e-c-black e-border-5" onClick={this.riskTypeOpen.bind(this)}>
                            <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-risk-icon" alt="Filter Risk"/>
                            Risk Type
                            <img className="e-m-left-10 e-ftheme-card-img e-up-arrow" alt="Down arrow"/>
                          </div>
                          <span className="e-absolute e-bg-white e-border-5 e-box-shadow-1 e-filter-items-wrap em-left e-min-invest-item-wrap">
                            <div className="e-filter-item">
                              <input id="risk-1" type="checkbox" placeholder="hey"/>
                              <label for="risk-1">Less than 5000</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="risk-2" type="checkbox" placeholder="hey"/>
                              <label for="risk-2">Less than 5000</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="risk-3" type="checkbox" placeholder="hey"/>
                              <label for="risk-3">Less than 5000</label>
                            </div>
                          </span>
                        </div>
                      :
                      <div className="e-filter-drpdown e-font-15 e-c-black e-border-5" onClick={this.riskTypeOpen.bind(this)}>
                        <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-risk-icon" alt="Filter Risk"/>
                        Risk Type
                        <img className="e-m-left-10 e-ftheme-card-img e-down-arrow" alt="Down arrow"/>
                      </div>
                    }
                  </div>*/}
                  <div className="col-lg-4 col-md-4 col-6 e-relative em-p-bottom-10">
                    
                    {
                      this.state.popularityOpen ?
                        <div>
                          <div className="e-filter-drpdown active e-font-15 e-c-black e-f-weight-500 e-border-5" onClick={this.popularityOpen.bind(this)}>
                            <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-popularity-icon" alt="Filter Popularity"/>
                            Popularity
                            <img className="e-m-left-10 e-ftheme-card-img e-up-arrow" alt="Down arrow"/>
                          </div>
                          <span className="e-absolute e-bg-white e-border-5 e-box-shadow-1 e-filter-items-wrap em-left e-min-invest-item-wrap">
                            <div className="e-filter-item">
                              Popularity
                            </div>
                            <div className="e-filter-item">
                              Latest First
                            </div>
                            <div className="e-filter-item">
                              Recently Rebalanced
                            </div>
                            <hr className="e-m-0"/>
                            <div className="e-filter-item">
                              <div className="e-f-weight-500 e-p-bottom-10">1Y Investment</div>
                              <span>
                                <input type="radio" name="1y" id="low" value="low"/>
                                <label for="low">Low - High</label>
                              </span>
                              <span className="e-p-left-20">
                                <input type="radio" name="1y" id="high" value="high"/>
                                <label for="high">High - Low</label>
                              </span>
                            </div>
                            <div className="e-filter-item">
                              <div className="e-f-weight-500 e-p-bottom-10">1M Investment</div>
                              <span>
                                <input type="radio" name="1m" id="1mlow" value="low"/>
                                <label for="1mlow">Low - High</label>
                              </span>
                              <span className="e-p-left-20">
                                <input type="radio" name="1m" id="1mhigh" value="high"/>
                                <label for="1mhigh">High - Low</label>
                              </span>
                            </div>
                            <div className="e-filter-item">
                              <div className="e-f-weight-500 e-p-bottom-10">Min Amount</div>
                              <span>
                                <input type="radio" name="min" id="minlow" value="low"/>
                                <label for="minlow">Low - High</label>
                              </span>
                              <span className="e-p-left-20">
                                <input type="radio" name="min" id="minhigh" value="high"/>
                                <label for="minhigh">High - Low</label>
                              </span>
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
            <div className="row e-p-bottom-30">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6 e-p-bottom-30"> 
                    <div className="col-lg-12 e-bg-white e-ftheme-card-wrap e-card-hover">
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                          <h4 className="e-f-weight-600">Energy takeout targets</h4>
                          <p className="e-card-p-txt e-p-bottom-10 e-c-brown ">This is to gain exposure to mergers & acquisitions activity among oil & gas companies. Get a complete picture of the energy investment section and decid.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <img className="e-ftheme-card-img e-m-bottom-10 e-m-max-width-full" src={cthemes1} alt="Themes by Fyers"/>
                        </div>
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-5 col-md-7 col-sm-7 col-7">
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
                            <div className="col-lg-5 col-md-7 col-sm-7 col-7">
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
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 e-p-bottom-30"> 
                    <div className="col-lg-12 e-bg-white e-ftheme-card-wrap e-card-hover">
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                          <h4 className="e-f-weight-600">Sustainable earnings</h4>
                          <p className="e-card-p-txt e-p-bottom-10 e-c-brown ">This is to gain exposure to mergers & acquisitions activity among oil & gas companies. Get a complete picture of the energy investment section and decid.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <img className="e-ftheme-card-img e-m-bottom-10 e-m-max-width-full" src={cthemes2} alt="Themes by Fyers"/>
                        </div>
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-5 col-md-7 col-sm-7 col-7">
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
                            <div className="col-lg-5 col-md-7 col-sm-7 col-7">
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
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 e-p-bottom-30"> 
                    <div className="col-lg-12 e-bg-white e-ftheme-card-wrap e-card-hover">
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                          <h4 className="e-f-weight-600">Low-risk smart beta</h4>
                          <p className="e-card-p-txt e-p-bottom-10 e-c-brown ">This is to gain exposure to mergers & acquisitions activity among oil & gas companies. Get a complete picture of the energy investment section and decid.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <img className="e-ftheme-card-img e-m-bottom-10 e-m-max-width-full" src={cthemes3} alt="Themes by Fyers"/>
                        </div>
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-5 col-md-7 col-sm-7 col-7">
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
                            <div className="col-lg-5 col-md-7 col-sm-7 col-7">
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
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 e-p-bottom-30"> 
                    <div className="col-lg-12 e-bg-white e-ftheme-card-wrap e-card-hover">
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                          <h4 className="e-f-weight-600">Magic formula</h4>
                          <p className="e-card-p-txt e-p-bottom-10 e-c-brown ">This is to gain exposure to mergers & acquisitions activity among oil & gas companies. Get a complete picture of the energy investment section and decid.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <img className="e-ftheme-card-img e-m-bottom-10 e-m-max-width-full" src={cthemes4} alt="Themes by Fyers"/>
                        </div>
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-5 col-md-7 col-sm-7 col-7">
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
                            <div className="col-lg-5 col-md-7 col-sm-7 col-7">
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
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 e-p-bottom-30"> 
                    <div className="col-lg-12 e-bg-white e-ftheme-card-wrap e-card-hover">
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                          <h4 className="e-f-weight-600">Rising rural demands</h4>
                          <p className="e-card-p-txt e-p-bottom-10 e-c-brown ">This is to gain exposure to mergers & acquisitions activity among oil & gas companies. Get a complete picture of the energy investment section and decid.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <img className="e-ftheme-card-img e-m-bottom-10 e-m-max-width-full" src={cthemes5} alt="Themes by Fyers"/>
                        </div>
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-5 col-md-7 col-sm-7 col-7">
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
                            <div className="col-lg-5 col-md-7 col-sm-7 col-7">
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
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 e-p-bottom-30"> 
                    <div className="col-lg-12 e-bg-white e-ftheme-card-wrap e-card-hover">
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                          <h4 className="e-f-weight-600">Sustainable Earnings</h4>
                          <p className="e-card-p-txt e-p-bottom-10 e-c-brown ">This is to gain exposure to mergers & acquisitions activity among oil & gas companies. Get a complete picture of the energy investment section and decid.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <img className="e-ftheme-card-img e-m-bottom-10 e-m-max-width-full" src={cthemes6} alt="Themes by Fyers"/>
                        </div>
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-5 col-md-7 col-sm-7 col-7">
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
                            <div className="col-lg-5 col-md-7 col-sm-7 col-7">
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
                      </div>
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

export default DiscoverFyersThemes;
