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

class DiscoverPublicThemes extends Component {

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
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/discover/fyers-themes"><span>Fyers Themes</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/discover/public-themes"><span>Public Themes</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="tab-pane show fade e-p-bottom-100 e-p-top-20" id="pthemes" role="tabpanel" aria-labelledby="pthemes-tab">
          <div className="container">
            <div className="row"> 
              <div className="col-10 offset-md-2 e-p-bottom-20 e-p-right-0">
                <div className="d-flex flex-row-reverse">
                  <div className="col-3 e-relative">
                    
                    {
                      this.state.popularityOpen ?
                        <div>
                          <div className="e-filter-drpdown active e-font-15 e-c-black e-border-5" onClick={this.popularityOpen.bind(this)}>
                            <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-popularity-icon" alt="Filter Popularity"/>
                            Popularity
                            <img className="e-m-left-10 e-ftheme-card-img e-up-arrow" alt="Down arrow"/>
                          </div>
                          <span className="e-absolute e-bg-white e-border-5 e-box-shadow-1 e-filter-items-wrap e-min-invest-item-wrap">
                            <div className="e-filter-item">
                              <input id="popularity-1" type="checkbox" placeholder="hey"/>
                              <label for="popularity-1">Less than 5000</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="popularity-2" type="checkbox" placeholder="hey"/>
                              <label for="popularity-2">Less than 5000</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="popularity-3" type="checkbox" placeholder="hey"/>
                              <label for="popularity-3">Less than 5000</label>
                            </div>
                          </span>
                        </div>
                      :
                      <div className="e-filter-drpdown e-font-15 e-c-black e-border-5" onClick={this.popularityOpen.bind(this)}>
                        <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-popularity-icon" alt="Filter Popularity"/>
                        Popularity
                        <img className="e-m-left-10 e-ftheme-card-img e-down-arrow" alt="Down arrow"/>
                      </div>
                    }
                  </div>
                  <div className="col-3 e-relative">
                    {
                      this.state.riskTypeOpen ?
                        <div>
                          <div className="e-filter-drpdown active e-font-15 e-c-black e-border-5" onClick={this.riskTypeOpen.bind(this)}>
                            <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-risk-icon" alt="Filter Risk"/>
                            Risk Type
                            <img className="e-m-left-10 e-ftheme-card-img e-up-arrow" alt="Down arrow"/>
                          </div>
                          <span className="e-absolute e-bg-white e-border-5 e-box-shadow-1 e-filter-items-wrap e-min-invest-item-wrap">
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
                  </div>
                  <div className="col-3 e-relative">
                    {
                      this.state.catgryOpen ?
                        <div>
                          <div className="e-filter-drpdown active e-font-15 e-c-black e-border-5" onClick={this.catgryOpen.bind(this)}>
                            <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-categories-icon" alt="Filter Risk"/>
                            Categories
                            <img className="e-m-left-10 e-ftheme-card-img e-up-arrow" alt="Down arrow"/>
                          </div>
                          <span className="e-absolute e-bg-white e-border-5 e-box-shadow-1 e-filter-items-wrap e-min-invest-item-wrap">
                            <div className="e-filter-item">
                              <input id="catgry-1" type="checkbox" placeholder="hey"/>
                              <label for="catgry-1">Less than 5000</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="catgry-2" type="checkbox" placeholder="hey"/>
                              <label for="catgry-2">Less than 5000</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="catgry-3" type="checkbox" placeholder="hey"/>
                              <label for="catgry-3">Less than 5000</label>
                            </div>
                          </span>
                        </div>
                      :
                      <div className="e-filter-drpdown e-font-15 e-c-black e-border-5" onClick={this.catgryOpen.bind(this)}>
                        <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-categories-icon" alt="Filter Risk"/>
                        Categories
                        <img className="e-m-left-10 e-ftheme-card-img e-down-arrow" alt="Down arrow"/>
                      </div>
                    }
                  </div>

                  <div className="col-3 e-relative">
                    {
                      this.state.minInvestOpen ?
                        <div>
                          <div className="e-filter-drpdown active e-font-15 e-c-black e-border-5" onClick={this.minInvestOpen.bind(this)}>
                            <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-minInvest-icon" alt="Filter Risk"/>
                            Min Investment
                            <img className="e-m-left-10 e-ftheme-card-img e-up-arrow" alt="Down arrow"/>
                          </div>
                          <span className="e-absolute e-bg-white e-border-5 e-box-shadow-1 e-filter-items-wrap e-min-invest-item-wrap">
                            <div className="e-filter-item">
                              <input id="minInvest-1" type="checkbox" placeholder="hey"/>
                              <label for="minInvest-1">Less than 5000</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="minInvest-2" type="checkbox" placeholder="hey"/>
                              <label for="minInvest-2">Less than 5000</label>
                            </div>
                            <div className="e-filter-item">
                              <input id="minInvest-3" type="checkbox" placeholder="hey"/>
                              <label for="minInvest-3">Less than 5000</label>
                            </div>
                          </span>
                        </div>
                      :
                      <div className="e-filter-drpdown e-font-15 e-c-black e-border-5" onClick={this.minInvestOpen.bind(this)}>
                        <img className="e-m-right-10 e-ftheme-card-img e-filter-risk-icon e-filter-minInvest-icon" alt="Filter Risk"/>
                        Min Investment
                        <img className="e-m-left-10 e-ftheme-card-img e-down-arrow" alt="Down arrow"/>
                      </div>
                    }
                  </div>

                  
                </div>
              </div>
            </div>
            <div className="col-12 e-ptheme-items-wrap e-p-left-0">
                <div className="row">
                  <div className="col-3 e-m-bottom-20">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="row e-p-bottom-10">
                        <div className="col-5">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-400">CARG <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                        <div className="col-7">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Daily Change <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Min Investment <span className="e-f-weight-600">₹14500.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 e-m-bottom-20">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="row e-p-bottom-10">
                        <div className="col-5">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-400">CARG <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                        <div className="col-7">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Daily Change <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Min Investment <span className="e-f-weight-600">₹14500.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 e-m-bottom-20">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="row e-p-bottom-10">
                        <div className="col-5">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-400">CARG <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                        <div className="col-7">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Daily Change <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Min Investment <span className="e-f-weight-600">₹14500.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 e-m-bottom-20">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="row e-p-bottom-10">
                        <div className="col-5">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-400">CARG <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                        <div className="col-7">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Daily Change <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Min Investment <span className="e-f-weight-600">₹14500.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 e-m-bottom-20">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="row e-p-bottom-10">
                        <div className="col-5">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-400">CARG <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                        <div className="col-7">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Daily Change <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Min Investment <span className="e-f-weight-600">₹14500.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 e-m-bottom-20">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="row e-p-bottom-10">
                        <div className="col-5">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-400">CARG <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                        <div className="col-7">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Daily Change <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Min Investment <span className="e-f-weight-600">₹14500.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 e-m-bottom-20">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="row e-p-bottom-10">
                        <div className="col-5">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-400">CARG <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                        <div className="col-7">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Daily Change <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Min Investment <span className="e-f-weight-600">₹14500.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 e-m-bottom-20">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="row e-p-bottom-10">
                        <div className="col-5">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-400">CARG <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                        <div className="col-7">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Daily Change <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Min Investment <span className="e-f-weight-600">₹14500.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 e-m-bottom-20">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4 className="e-f-weight-600">Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown e-p-bottom-10">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="row e-p-bottom-10">
                        <div className="col-5">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-400">CARG <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                        <div className="col-7">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Daily Change <span className="e-c-green e-f-weight-600">5.6%</span></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0 e-f-weight-300">Min Investment <span className="e-f-weight-600">₹14500.00</span></p>
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

export default DiscoverPublicThemes;
