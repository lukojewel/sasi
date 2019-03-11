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

class Watchlist extends Component {


  render() {
    return (
      <div className="e-body">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <ul className="nav nav-tabs e-tab-nav-wrap" id="themesTab" role="tablist">
                  <li className="nav-item e-m-left-0">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/dashboard/investments"><span>Investments</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/dashboard/drafts"><span>Drafts</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/dashboard/watchlist"><span>Watchlist</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="tab-pane fade show active" id="explore" role="tabpanel" aria-labelledby="explore-tab">
          <div className="e-p-bottom-100 e-p-top-30">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 e-m-bottom-30">
                  <div className="col-lg-12">
                    <div className="row e-dsh-invst-card e-dsh-draft-card e-p-equal-20 e-card-hover e-border-5">
                      <div className="col-lg-2 col-md-2 col-sm-3 col-3 e-p-0">
                        <img className="e-dsh-invst-img e-m-bottom-10 e-m-max-width-full" src={cthemes2} alt="Themes by Fyers"/>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-9 col-12 em-no-p-left">
                        <div className="row e-p-bottom-20">
                          <div className="col-lg-12">
                            <h4 className="e-c-black e-m-bottom-0 e-f-weight-500">Investicon</h4>
                          </div>
                        </div>
                        <div className="row e-p-bottom-10">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 em-p-bottom-10">
                            <div className="e-font-13 e-c-brown e-p-bottom-10 ">Yearly Return</div>
                            <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value e-c-green">32.6%</span></h6>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 em-p-bottom-10">
                            <div className="e-font-13 e-c-brown e-p-bottom-10">Monthly Return</div>
                            <h6 className="e-card-p-txt"><span className="e-dsh-top-card-value e-f-weight-500 e-c-green">0.6%</span></h6>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 em-p-bottom-10">
                            <div className="e-font-13 e-c-brown e-p-bottom-10">Min. Investment</div>
                            <h6 className="e-card-p-txt e-c-black e-f-weight-500"><span className="e-dsh-top-card-value">₹ 28405</span></h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <span className="e-p-btn e-f-weight-500 e-p-btn-up-effect">BUY THEME</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span>
                    <img className="e-dsh-close-btn e-icon-hover" alt="Themes by Fyers"/>
                  </span>
                </div>
                <div className="col-lg-6 e-m-bottom-30">
                  <div className="col-lg-12">
                    <div className="row e-dsh-invst-card e-dsh-draft-card e-p-equal-20  e-card-hover e-border-5">
                      <div className="col-lg-2 col-md-2 col-sm-3 col-3 e-p-0">
                        <img className="e-dsh-invst-img e-m-bottom-10 e-m-max-width-full" src={cthemes1} alt="Themes by Fyers"/>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-9 col-12 em-no-p-left">
                        <div className="row e-p-bottom-20">
                          <div className="col-lg-12">
                            <h4 className="e-c-black e-m-bottom-0 e-f-weight-500">Low Risk Smart Beta</h4>
                          </div>
                        </div>
                        <div className="row e-p-bottom-10">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 em-p-bottom-10">
                            <div className="e-font-13 e-c-brown e-p-bottom-10 ">Yearly Return</div>
                            <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value e-c-green">12.1%</span></h6>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 em-p-bottom-10">
                            <div className="e-font-13 e-c-brown e-p-bottom-10">Monthly Return</div>
                            <h6 className="e-card-p-txt"><span className="e-dsh-top-card-value e-f-weight-500 e-c-green">1.6%</span></h6>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 em-p-bottom-10">
                            <div className="e-font-13 e-c-brown e-p-bottom-10">Min. Investment</div>
                            <h6 className="e-card-p-txt e-c-black e-f-weight-500"><span className="e-dsh-top-card-value">₹ 10005</span></h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <span className="e-p-btn e-f-weight-500 e-p-btn-up-effect">BUY THEME</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span>
                    <img className="e-dsh-close-btn e-icon-hover" alt="Themes by Fyers"/>
                  </span>
                </div>
                <div className="col-lg-6 e-m-bottom-30">
                  <div className="col-lg-12">
                    <div className="row e-dsh-invst-card e-dsh-draft-card e-p-equal-20 e-card-hover e-border-5">
                      <div className="col-lg-2 col-md-2 col-sm-3 col-3 e-p-0">
                        <img className="e-dsh-invst-img e-m-bottom-10 e-m-max-width-full" src={cthemes6} alt="Themes by Fyers"/>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-8 col-12 em-no-p-left">
                        <div className="row e-p-bottom-20">
                          <div className="col-lg-12">
                            <h4 className="e-c-black e-m-bottom-0 e-f-weight-500">Rising Rural Demand</h4>
                          </div>
                        </div>
                        <div className="row e-p-bottom-10">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 em-p-bottom-10">
                            <div className="e-font-13 e-c-brown e-p-bottom-10 ">Yearly Return</div>
                            <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value e-c-green">12.7%</span></h6>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 em-p-bottom-10">
                            <div className="e-font-13 e-c-brown e-p-bottom-10">Monthly Return</div>
                            <h6 className="e-card-p-txt"><span className="e-dsh-top-card-value e-f-weight-500 e-c-green">3.1%</span></h6>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-6 em-p-bottom-10">
                            <div className="e-font-13 e-c-brown e-p-bottom-10">Min. Investment</div>
                            <h6 className="e-card-p-txt e-c-black e-f-weight-500"><span className="e-dsh-top-card-value">₹ 18405</span></h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <span className="e-p-btn e-f-weight-500 e-p-btn-up-effect">BUY THEME</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span>
                    <img className="e-dsh-close-btn e-icon-hover" alt="Themes by Fyers"/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> 
    ); 
  } 
}

export default Watchlist;
