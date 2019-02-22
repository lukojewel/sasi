/*Package importing*/
import React, { Component } from 'react';
import playIcon from '../assets/images/play-icon.svg';
import ideaImage1 from '../assets/images/fyers-themes-images-1.png';
import leftArrow from '../assets/images/left-arrow.svg';
import publicTheme1 from '../assets/images/publicTheme1.png';
import news1 from '../assets/images/news1.png';
import SEBILogo from '../assets/images/sebi-logo.png';
import investorsLogo from '../assets/images/investors-logo.png';
import fyersThematicLogo from '../assets/images/fyers-thematic-logo.png';

class Discover extends Component {
  render() {
    return (
      <div className="e-body">
        <header className="e-fixed e-bg-white">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img className="e-border-5 e-footer-logo" src={fyersThematicLogo} alt="Fyers Logo"/>
              </div>
              <div className="col-6 e-align-right e-p-right-0">
                <a href="/" className="e-nav-item e-c-brown e-nav-item"><span className="e-search-icn"></span>Search</a>
                <a href="/" className="e-nav-item e-c-brown e-nav-item">Discover</a>
                <a href="/" className="e-nav-item e-c-brown e-nav-item">Login</a>
                <a href="/" className="e-nav-item e-c-primary e-nav-item e-f-weight-900">Open an account</a>
              </div>
            </div>
          </div>
        </header>
        
        <section className="e-p-top-100 e-p-bottom-50 ">
          <div className="container e-vh-50 d-flex align-items-center">
            <div className="row">
              <div className="col-12">
                <h6 className="e-c-primary e-letter-space e-s-txt e-p-bottom-10">THEMES</h6>
                <h2 className="e-p-bottom-10 e-banner-head">Discover <span className="e-c-grey">Themes</span></h2>
                <h5 className="e-c-brown">Our products are built for long term performance.</h5>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="nav nav-tabs e-tab-nav-wrap" id="themesTab" role="tablist">
                  <li className="nav-item e-m-left-0">
                    <a className="nav-link active e-m-left-0" id="explore-tab" data-toggle="tab" href="#explore" role="tab" aria-controls="explore" aria-selected="true"><span className="e-font-16 e-c-medium-grey e-f-weight-600">Explore</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="fthemes-tab" data-toggle="tab" href="#fthemes" role="tab" aria-controls="fthemes" aria-selected="false"><span className="e-font-16 e-c-medium-grey e-f-weight-600">Fyers Themes</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pthemes-tab" data-toggle="tab" href="#pthemes" role="tab" aria-controls="pthemes" aria-selected="false"><span className="e-font-16 e-c-medium-grey e-f-weight-600">Public Themes</span></a>
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
                <div className="col-12">
                    <div className="row ">
                      <div className="col-6 e-p-left-0"> 
                        <div className="col-12 e-bg-white e-ftheme-card-wrap">
                          <div className="row">
                            <div className="col-8">
                              <h4>Energy takeout targets</h4>
                              <p className="e-card-p-txt e-p-bottom-10 e-c-brown">This is to gain exposure to mergers & acquisitions activity among oil & gas companies. Get a complete picture of the energy investment section and decid.</p>
                              <div className="row">
                                <div className="col-7">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-600">
                                    Yearly Return <span className="e-c-green">25.5%</span>
                                  </p>
                                </div>
                                <div className="col-5">
                                  <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-600">
                                    Monthly Return <span className="e-c-green">5.6%</span>
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-7">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-600">
                                    Min Investment <span className="e-c-black">₹14500.00</span>
                                  </p>
                                </div>
                                <div className="col-5">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-600">
                                    Risk <span className="e-c-red">High</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-4">
                              <img className="e-ftheme-card-img e-m-bottom-10" src={ideaImage1} alt="Themes by Fyers"/>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-6 e-p-right-0"> 
                        <div className="col-12 e-bg-white e-ftheme-card-wrap">
                          <div className="row">
                            <div className="col-8">
                              <h4>Energy takeout targets</h4>
                              <p className="e-card-p-txt e-p-bottom-10 e-c-brown">This is to gain exposure to mergers & acquisitions activity among oil & gas companies. Get a complete picture of the energy investment section and decid.</p>
                              <div className="row">
                                <div className="col-7">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-600">
                                    Yearly Return <span className="e-c-green">25.5%</span>
                                  </p>
                                </div>
                                <div className="col-5">
                                  <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-600">
                                    Monthly Return <span className="e-c-green">5.6%</span>
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-7">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-600">
                                    Min Investment <span className="e-c-black">₹14500.00</span>
                                  </p>
                                </div>
                                <div className="col-5">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-600">
                                    Risk <span className="e-c-red">High</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-4">
                              <img className="e-ftheme-card-img e-m-bottom-10" src={ideaImage1} alt="Themes by Fyers"/>
                            </div>
                          </div>
                        </div>
                      </div>


                    
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="e-card-arrow-wrap"> 
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

          <div className="e-p-bottom-100 e-p-top-100 e-dvr-t-perfom-wrap">
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <h5 className="e-sec-head e-c-black e-p-bottom-20">TOP PERFORMING <span className="e-c-grey">THEMES</span></h5>
                </div>
                <img className="e-top-theme-pattern-img-1" alt="Fyers pattern"/>
              </div>
              <div className="col-12 e-p-top-50 e-ptheme-items-wrap e-p-left-0">
                <div className="row">
                  <div className="col-3">
                    <div className="e-ptheme-card-wrap">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4>Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="d-flex flex-row d-flex justify-content-between">
                        <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                        <a aria-label="Invest Now" href="/">Invest now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="e-ptheme-card-wrap">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4>Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="d-flex flex-row d-flex justify-content-between">
                        <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                        <a aria-label="Invest Now" href="/">Invest now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="e-ptheme-card-wrap">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4>Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="d-flex flex-row d-flex justify-content-between">
                        <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                        <a aria-label="Invest Now" href="/">Invest now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="e-ptheme-card-wrap">
                      <img className="e-m-bottom-10 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                      <h4>Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                      <div className="d-flex flex-row d-flex justify-content-between">
                        <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                        <a aria-label="Invest Now" href="/">Invest now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="e-top-theme-pattern-img-2" alt="Fyers pattern"/>
              </div>
              <div className="row">
                <div className="e-align-right e-card-arrow-wrap e-relative"> 
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

          <div className="e-p-bottom-100 e-p-top-100">
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <h5 className="e-sec-head e-c-black e-p-bottom-20">RECENTLY<span className="e-c-grey">VIEWED</span></h5>
                </div>
              </div>
              <div className="col-12 e-p-top-20 e-ptheme-items-wrap e-p-left-0">
                <div className="row">
                  <div className="col-3">
                    <div className="e-ptheme-card-wrap">
                      <img className="e-m-bottom-10 e-border-5" src={news1} alt="Themes by Fyers"/>
                      <h4>Benefits of Investing in a Diversified Portfolio</h4>
                      <span className="e-x-s-txt e-c-grey">1 day ago</span>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="e-ptheme-card-wrap">
                      <img className="e-m-bottom-10 e-border-5" src={news1} alt="Themes by Fyers"/>
                      <h4>Benefits of Investing in a Diversified Portfolio</h4>
                      <span className="e-x-s-txt e-c-grey">1 day ago</span>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="e-ptheme-card-wrap">
                      <img className="e-m-bottom-10 e-border-5" src={news1} alt="Themes by Fyers"/>
                      <h4>Benefits of Investing in a Diversified Portfolio</h4>
                      <span className="e-x-s-txt e-c-grey">1 day ago</span>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="e-ptheme-card-wrap">
                      <img className="e-m-bottom-10 e-border-5" src={news1} alt="Themes by Fyers"/>
                      <h4>Benefits of Investing in a Diversified Portfolio</h4>
                      <span className="e-x-s-txt e-c-grey">1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="e-align-right e-card-arrow-wrap e-relative"> 
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

          <div className="e-p-bottom-100 e-p-top-100 e-bg-light-gray">
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <h5 className="e-sec-head e-c-black e-p-bottom-20">THEME <span className="e-c-grey">COLLECTIONS</span></h5>
                </div>
              </div>
               <div className="col-12 e-p-top-50 e-hm-why-items-wrap">
              <div className="row">
                <div className="col-4">
                  <div className="row e-p-bottom-50 e-hm-why-easy-wrap">
                    <div className="col-4">
                      <img alt="Easy & simple method to invest"/>
                    </div>
                    <div className="col-8 e-p-right-0">
                      <p className="e-c-black">Easy & simple method to invest</p>
                    </div>
                  </div>
                  <div className="row e-p-bottom-50 e-hm-why-customizable-wrap">
                    <div className="col-4">
                      <img alt="Highly customizable to perform"/>
                    </div>
                    <div className="col-8 e-p-right-0">
                      <p className="e-c-black">Highly customizable to perform</p>
                    </div>
                  </div>
                  <div className="row e-hm-why-uPortfolio-wrap">
                    <div className="col-4">
                      <img alt="100+ unique portfolios to follow"/>
                    </div>
                    <div className="col-8 e-p-right-0">
                      <p className="e-c-black">100+ unique portfolios to follow</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="row e-p-bottom-50 e-hm-why-researched-wrap">
                    <div className="col-4">
                      <img alt="Gets thoroughly researched portfolios"/>
                    </div>
                    <div className="col-8 e-p-right-0">
                      <p className="e-c-black">Gets thoroughly researched portfolios</p>
                    </div>
                  </div>
                  <div className="row e-p-bottom-50 e-hm-why-fee-wrap">
                    <div className="col-4">
                      <img alt="No management fee,no hidden costs"/>
                    </div>
                    <div className="col-8 e-p-right-0">
                      <p className="e-c-black">No management fee,no hidden costs</p>
                    </div>
                  </div>
                  <div className="row e-hm-why-ideas-wrap">
                    <div className="col-4">
                      <img alt="Invest in your own ideas you believe"/>
                    </div>
                    <div className="col-8 e-p-right-0">
                      <p className="e-c-black">Invest in your own ideas you believe</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="row e-p-bottom-50 e-hm-why-mfunds-wrap">
                    <div className="col-4">
                      <img alt="Outperform mutual funds in every way"/>
                    </div>
                    <div className="col-8 e-p-right-0">
                      <p className="e-c-black">Outperform mutual funds in every way</p>
                    </div>
                  </div>
                  <div className="row e-p-bottom-50 e-hm-why-fcontrol-wrap">
                    <div className="col-4">
                      <img alt="Full control over your portfolio"/>
                    </div>
                    <div className="col-8 e-p-right-0">
                      <p className="e-c-black">Full control over your portfolio</p>
                    </div>
                  </div>
                  <div className="row e-hm-why-more-wrap">
                    <div className="col-4">
                      <img alt="And a lot more"/>
                    </div>
                    <div className="col-8 e-p-right-0">
                      <p className="e-c-black">And a lot more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="row">
                <div className="e-align-right e-card-arrow-wrap e-relative"> 
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
        </section>





        <div className="tab-pane fade" id="fthemes" role="tabpanel" aria-labelledby="fthemes-tab">Hi</div>
        <div className="tab-pane fade" id="pthemes" role="tabpanel" aria-labelledby="pthemes-tab">Hey</div>






        <footer className="e-p-top-100 e-p-bottom-100 e-bg-light-gray">
          <div className="container e-footer-container">
            <div className="row">
              <div className="col-4 e-footer-items-wrap">
                <img className="e-m-bottom-20 e-m-right-20 e-border-5 e-footer-logo" src={fyersThematicLogo} alt="Fyers Logo"/>
                <p className="e-m-0 e-c-grey e-card-p-txt e-footer-dbl-lh">CIN :U74900KA2015HYFM09H<br/>GSTIN :U74900KA2015HYFM09H<br/>SEBI Research Analyst INH20987532</p>
              </div>
              <div className="col-4 e-footer-items-wrap">
                <h4 className="e-m-bottom-10">Registered address</h4>
                <p className="e-m-0 e-c-grey e-card-p-txt e-footer-dbl-lh">No.19 & 20, 3rd Main, Gandhinagar,<br/>Bangalore 560009<br/>Call: 080 4625 1111</p>
              </div>
              <div className="col-4 e-footer-items-wrap ">
                <h4 className="e-m-bottom-10">Connect with us 
                  <a aria-label="Facebook" href="/"><span className="e-f-fb-logo e-f-social-logo e-relative"></span></a>
                  <a aria-label="Twitter" href="/"><span className="e-f-tw-logo e-f-social-logo e-relative"></span></a>
                  <a aria-label="You Tube" href="/"><span className="e-f-yt-logo e-f-social-logo e-relative"></span></a>
                </h4>
                <p className="e-m-0 e-c-grey e-card-p-txt e-f-para">For any complaints pertaining to securities broking please write to complaints@fyers.com for DP related to dp@fyers.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
              </div>
            </div>
          </div>
        </footer>
      </div> 
    ); 
  } 
}

export default Discover;
