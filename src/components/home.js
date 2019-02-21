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

class Home extends Component {
  render() {
    return (
      <div className="e-body">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-7">
                <img className="e-border-5 e-footer-logo" src={fyersThematicLogo} alt="Fyers Logo"/>
              </div>
              <div className="col-5">
                <span className="e-nav-item e-c-brown">Search</span>
                <span className="e-nav-item e-c-brown">Discover</span>
                <span className="e-nav-item e-c-brown">Login</span>
                <span className="e-nav-item e-c-primary">Open an account</span>
              </div>
            </div>
          </div>
        </header>
        <section className="e-banner-wrap e-hm-banner-wrap">
          <div className="container vh-100 d-flex align-items-center">
            <div className="align-middle">
              <h6 className="e-c-primary e-letter-space">THEMATIC</h6>
              <h1 className="e-banner-head e-c-black">Invest in the next <span>significant idea.</span></h1>
              <h5 className="e-c-brown e-p-bottom-30">Be wealthy. Be successful.</h5>
              <div>
                <span className="e-p-btn e-m-right-20">LOG IN</span><span className="e-s-btn">OPEN AN ACCOUNT</span>
              </div>
              <div>
                <span className="e-hm-play-icn-wrap e-m-top-20">
                  <img className="ev-nav-logo-dark" src={playIcon} alt="Watch about Thematic"/>
                </span>
                <span className="e-s-txt e-c-brown e-p-left-10 e-relative e-hm-play-icn-txt e-txt-underline">Watch a quick video</span>
              </div>
            </div>
          </div>
        </section>
        <section className="e-p-top-100 e-p-bottom-50">
          <div className="container e-relative">
            <div className="row">
              <div className="col-7">
                <h2 className="e-p-bottom-20">Brilliant Ideas for <br/><span className="e-c-grey">Zero Fee</span></h2>
                <h5 className="e-c-brown">We help you to build a data-driven, diversified, low cost & long term successful portfolio based on the trend in the economy for free!</h5>
              </div>
              <div className="col-5 e-bg-white e-ftheme-card-wrap e-hm-ftheme-card-wrap e-relative">
                <div className="row">
                    <div className="col-8">
                      <h4>Energy takeout targets</h4>
                      <p className="e-card-p-txt e-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                    </div>
                    <div className="col-4 e-align-center ">
                      <img className="e-ftheme-card-img e-m-bottom-10" src={ideaImage1} alt="Themes by Fyers"/>
                    </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="d-flex ">
                      <p className="e-card-pl-txt e-p-0 e-m-0 e-c-brown mt-auto p-2">MONTHLY RETURNS <span className="e-c-green">5.6%</span></p>
                    </div>
                  </div>
                  <div className="col-4 e-align-center ">
                    <a href="/">Invest Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="e-align-right e-card-arrow-wrap e-ftheme-card-arrow-wrap e-relative"> 
              <span className="e-m-right-20">
                <img className="e-ftheme-card-img" src={leftArrow} alt="Left arrow"/>
              </span>
              <span className="active">
                <img className="e-ftheme-card-img e-right-arrow" src={leftArrow} alt="Right arrow"/>
              </span>
            </div>
          </div>
        </section>
        <section className="e-bg-primary e-p-top-100 e-p-bottom-100 e-relative">
          <img className="e-hw-to-pattern" alt="How to work pattern"/>
          <div className="container">
            <div className="col-6 e-p-bottom-30">
              <h2 className="e-p-bottom-20 e-c-white">How to start <br/><span className="e-c-dull-secondary">Thematic?</span></h2>
              <h5 className="e-c-brown e-hm-how-head-sec">With 3 simple steps you can begin your bright investment future with us</h5>
            </div>
            <div className="col-11 e-p-top-50 e-hm-how-items-wrap">
              <div className="row">
                <div className="col-3 offset-md-1 e-hm-how-pick-wrap">
                  <img className="e-p-bottom-10" alt="How to work pick"/>
                  <h3 className="e-c-white e-p-bottom-10">Pick</h3>
                  <p className="e-hm-how-para e-p-bottom-10">Choose an existing theme from our inventory to start investing, evaluating or follow it.</p>
                  <a href="/">VIEW THEMES</a>
                </div>
                <div className="col-3 offset-md-1 e-hm-how-customize-wrap">
                  <img className="e-p-bottom-10" alt="How to work pick"/>
                  <h3 className="e-c-white e-p-bottom-10">Pick</h3>
                  <p className="e-hm-how-para e-p-bottom-10">If you want to add or remove any instrument to or from the chosen theme, you can do that.</p>
                  <a href="/">VIEW THEMES</a>
                </div>
                <div className="col-3 offset-md-1 e-hm-how-invest-wrap">
                  <img className="e-p-bottom-10" alt="How to work pick"/>
                  <h3 className="e-c-white e-p-bottom-10">Invest</h3>
                  <p className="e-hm-how-para e-p-bottom-10">If you believe the chosen theme or your customised idea can perform, start buying it.</p>
                  <a href="/">VIEW THEMES</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="  e-p-top-100 e-p-bottom-100">
          <div className="container">
            <div className="col-6 e-p-bottom-30">
              <h2 className="e-p-bottom-20 e-c-black">Why investment in <br/><span className="e-c-grey">Ideas?</span></h2>
              <h5 className="e-c-black">Investing in multiple stocks can reduce risk and can beat other investment techniques, also</h5>
            </div>
            <div className="col-11 e-p-top-50 e-hm-why-items-wrap">
              <div className="row">
                <div className="col-3 offset-md-1">
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
                <div className="col-3 offset-md-1">
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
                <div className="col-3 offset-md-1">
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
          </div>
        </section>
        <section className="e-p-bottom-100 e-top-themes-outer-wrap">
          <div className="">
            <div className="col-9 e-p-bottom-30 e-top-theme-head-wrap ">
              <h2 className="e-p-bottom-20 e-c-black e-p-top-100">Top performing <br/><span className="e-c-grey">Themes</span></h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h5 className="e-c-black">Themes from Fyers which outperform the mutual funds</h5>
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
                      <a href="/">Invest now</a>
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
                      <a href="/">Invest now</a>
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
                      <a href="/">Invest now</a>
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
                      <a href="/">Invest now</a>
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
                <a className="e-c-primary e-m-left-20 e-relative e-top-themes-more-txt" href="/">MORE THEMES</a>
              </div>
            </div>
          </div>
        </section>
        <section className="e-p-top-100 e-p-bottom-100">
          <div className="container">
            <div className="col-6 e-p-bottom-30">
              <h2 className="e-p-bottom-20 e-c-black">Our <br/><span className="e-c-grey">News</span></h2>
              <h5 className="e-c-black">Latest news, breaking stories & more</h5>
            </div>
            <div className="col-12 e-p-top-20 e-ptheme-items-wrap e-p-left-0">
              <div className="row">
                <div className="col-4">
                  <div className="e-ptheme-card-wrap">
                    <img className="e-m-bottom-10 e-border-5" src={news1} alt="Themes by Fyers"/>
                    <h4>Benefits of Investing in a Diversified Portfolio</h4>
                    <span className="e-x-s-txt e-c-grey">1 day ago</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="e-ptheme-card-wrap">
                    <img className="e-m-bottom-10 e-border-5" src={news1} alt="Themes by Fyers"/>
                    <h4>Benefits of Investing in a Diversified Portfolio</h4>
                    <span className="e-x-s-txt e-c-grey">1 day ago</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="e-ptheme-card-wrap">
                    <img className="e-m-bottom-10 e-border-5" src={news1} alt="Themes by Fyers"/>
                    <h4>Benefits of Investing in a Diversified Portfolio</h4>
                    <span className="e-x-s-txt e-c-grey">1 day ago</span>
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
                <a className="e-c-primary e-m-left-20 e-relative e-top-themes-more-txt" href="/">MORE THEMES</a>
              </div>
            </div>
          </div>
        </section>
        <section className="e-p-top-100 e-p-bottom-100 e-hm-b-subscribe-wrap e-relative">
          <img className="e-footer-pattern" alt="Footer pattern"/>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h2 className="e-p-bottom-20 e-c-white">Know more <br/><span className="e-c-dull-secondary">About Us?</span></h2>
                <h5 className="e-c-brown e-hm-how-head-sec">Need clarification for opening an account or have queries?</h5>
              </div>
              <div className="col-5 offset-md-1 d-flex align-items-end">
                <div className="e-hm-trstwrthy-img-wrap row e-absolute">
                  <img className="e-m-bottom-10 e-m-right-20 e-border-5" src={investorsLogo} alt="Trustful investors"/>
                  <img className="e-m-bottom-10 e-border-5" src={SEBILogo} alt="SEBI registered investment advisor"/> 
                </div>
                <form className="e-hm-subscribe-form align-bottom e-relative">
                  <input id="pnumber" type="text" placeholder="Phone number" required/>
                  <span className="e-hm-subscribe-form-submit">
                    <img alt="White right arrow"/>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </section>
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
                  <a href="/"><span className="e-f-fb-logo e-f-social-logo e-relative"></span></a>
                  <a href="/"><span className="e-f-tw-logo e-f-social-logo e-relative"></span></a>
                  <a href="/"><span className="e-f-yt-logo e-f-social-logo e-relative"></span></a>
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

export default Home;
