/*Package importing*/
import React, { Component } from 'react';
import $ from 'jquery';
import Header from './header.js';


import playIcon from '../assets/images/play-icon.svg';
import ideaImage1 from '../assets/images/fyers-themes-images-1.png';
import leftArrow from '../assets/images/left-arrow.svg';
import publicTheme1 from '../assets/images/publicTheme1.png';
import publicTheme2 from '../assets/images/publicTheme2.png';
import publicTheme3 from '../assets/images/publicTheme3.png';
import publicTheme4 from '../assets/images/publicTheme4.png';
import news1 from '../assets/images/news1.png';
import news2 from '../assets/images/news2.png';
import news3 from '../assets/images/news3.png';
import SEBILogo from '../assets/images/sebi-logo.png';
import investorsLogo from '../assets/images/investors-logo.png';
import fyersThematicLogo from '../assets/images/fyers-thematic-logo.png';

class Home extends Component {
  componentDidMount() {
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  }
  constructor(props){
    super(props);
    this.state = {
        searchBoxShow: false,
        fname: "",
    }
  }
  videoOverlyClick(e){
    $("iframe").remove();
  }
  hmPlayClick(e){
    $(".e-hm-video-m-content .e-hm-video-m-wrap").html('<iframe class="embed-responsive-item e-hm-video-iframe" src="https://www.youtube.com/embed/ApXoWvfEYVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  }
  searchClick(e){  
    e.preventDefault();
    this.setState({ searchBoxShow: true});
  }
  searchClickReturn(e){  
    e.preventDefault();
    if(this.state.fname == ""){this.setState({ searchBoxShow: false});}
  }
  
  fnameChange(e){  this.setState({ fname: e.target.value}) }

  render() {
    return (
      <div className="e-body">
        <Header/>
        <section className="e-banner-wrap e-hm-banner-wrap">
          <div className="container d-flex align-items-center e-hm-banner-content">
            <div className="align-middle e-p-left-50 e-hm-banne-txt ">
              <h6 className="e-c-primary e-letter-space">THEMATIC</h6>
              <h1 className="e-banner-head e-c-black">Invest in the next <span>significant idea.</span></h1>
              <h5 className="e-c-brown e-p-bottom-30">Be wealthy. Be successful.</h5>
              <div>
                <span className="e-p-btn e-m-right-20 e-p-btn-up-effect">LOG IN</span><span className="e-s-btn e-s-btn-up-effect">OPEN AN ACCOUNT</span>
              </div>
              <a href="/" className="e-c-grey" data-toggle="modal" data-target="#vHistoryModal">
              <div onClick={this.hmPlayClick.bind(this)}>
                <span className="e-hm-play-icn-wrap e-m-top-20" >
                  <img className="ev-nav-logo-dark e-relative" src={playIcon} alt="Watch about Thematic"/>
                </span>
                <span className="e-s-txt e-c-brown e-p-left-10 e-hm-play-icn-txt "><span className="e-c-grey e-link-text e-hm-video-link-txt" href="/">Watch a quick video</span></span>
              </div>
              </a>
            </div>
          </div>
        </section>
        <section className="e-p-top-100 e-p-bottom-50">
          <div className="container e-relative">
            
            <div className="row ">
              <div className="d-flex flex-row m-flex-column e-tl-no-flex-display">
                <div className="col-lg-7 col-md-12 col-sm-12  em-p-bottom">
                  <h2 className="e-p-bottom-20">Brilliant Ideas for <br/><span className="e-c-grey">Zero Fee</span></h2>
                  <h5 className="e-c-brown">We help you to build a data-driven, diversified, low cost & long term successful portfolio based on the trend in the economy for free!</h5>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 ">
                  <div className="e-bg-white e-ftheme-card-wrap e-hm-ftheme-card-wrap e-relative ">
                    <div className="row e-hm-topTheme-wrap e-show">
                        <div className="col-8">
                          <h4>Energy takeout targets</h4>
                          <p className="e-card-p-txt e-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                        </div>
                        <div className="col-4 e-align-center ">
                          <img className="e-ftheme-card-img e-m-bottom-10 e-full-width" src={ideaImage1} alt="Themes by Fyers"/>
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <div className="d-flex ">
                          <p className="e-card-pl-txt e-p-0 e-m-0 e-c-brown mt-auto p-2">MONTHLY RETURNS <span className="e-c-green">5.6%</span></p>
                        </div>
                      </div>
                      <div className="col-4 e-align-center">
                        <a href="/theme-detail/overview" className="e-a-primary-c" aria-label="Invest now">Invest Now</a>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            

            <div className="e-align-right e-card-arrow-wrap e-ftheme-card-arrow-wrap e-relative"> 
              <span className="e-m-right-20 e-hm-topTheme-leftArrow">
                <img className="e-ftheme-card-img e-relative" src={leftArrow} alt="Left arrow"/>
              </span>
              <span className="active e-hm-topTheme-rightArrow">
                <img className="e-ftheme-card-img e-right-arrow" src={leftArrow} alt="Right arrow"/>
              </span>
            </div>
          </div>
        </section>
        <section className="e-bg-primary e-p-top-100 e-p-bottom-100 e-relative">
          <img className="e-hw-to-pattern" alt="How to work pattern"/>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 e-p-bottom-30">
                <h2 className="e-p-bottom-20 e-c-white">How to start <br/><span className="e-c-dull-secondary">Thematic?</span></h2>
                <h5 className="e-c-brown e-hm-how-head-sec">With 3 simple steps you can begin your bright investment future with us</h5>
              </div>
            </div>
            <div className="col-11 e-p-top-50 e-hm-how-items-wrap">
              <div className="row">
                <div className="col-md-3 offset-md-1 e-hm-how-pick-wrap e-m-p-bottom-30">
                  <img className="e-p-bottom-10" alt="How to work pick"/>
                  <h3 className="e-c-white e-p-bottom-10">Pick</h3>
                  <p className="e-hm-how-para e-p-bottom-10">Choose an existing theme from our inventory to start investing, evaluating or follow it.</p>
                  <a aria-label="View Themes" className="e-a-bg-secondary-c" href="/discover/explore">VIEW THEMES</a>
                </div>
                <div className="col-md-3 offset-md-1 e-hm-how-customize-wrap e-m-p-bottom-30">
                  <img className="e-p-bottom-10" alt="How to work pick"/>
                  <h3 className="e-c-white e-p-bottom-10">Customize</h3>
                  <p className="e-hm-how-para e-p-bottom-10">If you want to add or remove any instrument to or from the chosen theme, you can do that.</p>
                  <a aria-label="View Themes" className="e-a-bg-secondary-c" href="/discover/explore">VIEW THEMES</a>
                </div>
                <div className="col-md-3 offset-md-1 e-hm-how-invest-wrap e-m-p-bottom-30">
                  <img className="e-p-bottom-10" alt="How to work pick"/>
                  <h3 className="e-c-white e-p-bottom-10">Invest</h3>
                  <p className="e-hm-how-para e-p-bottom-10">If you believe the chosen theme or your customised idea can perform, start buying it.</p>
                  <a aria-label="View Themes" className="e-a-bg-secondary-c" href="/discover/explore">VIEW THEMES</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="e-p-top-100 e-p-bottom-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 e-p-bottom-30 ">
                <h2 className="e-p-bottom-20 e-c-black">Why investment in <br/><span className="e-c-grey">Ideas?</span></h2>
                <h5 className="e-c-black">Investing in multiple stocks can reduce risk and can beat other investment techniques, also</h5>
              </div>
            </div>
            <div className=" e-p-top-50 e-hm-why-items-wrap">
              <div className="row e-m-p-bottom-30">
                <div className="col-lg-3 col-md-5 col-sm-5 offset-md-1 e-p-bottom-50 e-hm-why-easy-wrap">
                  <div className="media">
                    <img alt="Easy & simple method to invest"/>
                    <div className="media-body">
                      <p className="e-c-black e-p-left-20">Easy & simple <br/>method to invest</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-5 offset-md-1 e-p-bottom-50 e-hm-why-researched-wrap">
                  <div className="media">
                    <img alt="Easy & simple method to invest"/>
                    <div className="media-body">
                      <p className="e-c-black e-p-left-20">Gets thoroughly <br/>researched portfolios</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-5 offset-md-1 e-p-bottom-50 e-hm-why-mfunds-wrap">
                  <div className="media">
                    <img alt="Easy & simple method to invest"/>
                    <div className="media-body">
                      <p className="e-c-black e-p-left-20">Outperform mutual <br/>funds in every way</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-5 offset-md-1 e-p-bottom-50 e-hm-why-customizable-wrap">
                  <div className="media">
                    <img alt="Easy & simple method to invest"/>
                    <div className="media-body">
                      <p className="e-c-black e-p-left-20">Highly customizable <br/>to perform</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-5 offset-md-1 e-p-bottom-50 e-hm-why-fee-wrap">
                  <div className="media">
                    <img alt="Easy & simple method to invest"/>
                    <div className="media-body">
                      <p className="e-c-black e-p-left-20">No management fee, <br/>no hidden costs</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-5 offset-md-1 e-p-bottom-50 e-hm-why-fcontrol-wrap">
                  <div className="media">
                    <img alt="Easy & simple method to invest"/>
                    <div className="media-body">
                      <p className="e-c-black e-p-left-20">Full control over <br/>your portfolio</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-5 offset-md-1 e-p-bottom-50 e-hm-why-uPortfolio-wrap">
                  <div className="media">
                    <img alt="Easy & simple method to invest"/>
                    <div className="media-body">
                      <p className="e-c-black e-p-left-20">100+ unique <br/>portfolios to follow</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-5 offset-md-1 e-p-bottom-50 e-hm-why-ideas-wrap">
                  <div className="media">
                    <img alt="Easy & simple method to invest"/>
                    <div className="media-body">
                      <p className="e-c-black e-p-left-20">Invest in your own <br/>ideas you believe</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-5 offset-md-1 e-p-bottom-50 e-hm-why-more-wrap">
                  <div className="media">
                    <img alt="Easy & simple method to invest"/>
                    <div className="media-body align-middle">
                      <p className="e-c-black e-p-left-20 e-hm-why-last-item">And a lot more</p>
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
              </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-9 e-p-bottom-30 ">
                <h2 className="e-p-bottom-20 e-c-black e-p-top-100">Top performing <br/><span className="e-c-grey">Themes</span></h2>
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-lg-7">
                <h5 className="e-c-black">Themes from Fyers which outperform the mutual funds</h5>
              </div>
              <img className="e-top-theme-pattern-img-1" alt="Fyers pattern"/>
            </div>
            <div className="col-md-12 col-sm-12 e-p-top-50 e-ptheme-items-wrap e-p-left-0 e-p-right-0">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="e-ptheme-card-wrap e-card-hover">
                    <img className="e-m-bottom-20 e-border-5" src={publicTheme1} alt="Themes by Fyers"/>
                    <h4>Energy takeout targets</h4>
                    <p className="e-card-p-txt e-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                    <div className="d-flex flex-row d-flex justify-content-between">
                      <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">4.1%</span></p>
                      <a aria-label="Invest Now" className="e-a-primary-c" href="/theme-detail/overview">Invest now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 em-display-none">
                  <div className="e-ptheme-card-wrap e-card-hover">
                    <img className="e-m-bottom-20 e-border-5" src={publicTheme2} alt="Themes by Fyers"/>
                    <h4>Rising rural demand</h4>
                    <p className="e-card-p-txt e-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                    <div className="d-flex flex-row d-flex justify-content-between">
                      <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">5.6%</span></p>
                      <a aria-label="Invest Now" className="e-a-primary-c" href="/theme-detail/overview">Invest now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 em-display-none em-tablet-display-none">
                  <div className="e-ptheme-card-wrap e-card-hover">
                    <img className="e-m-bottom-20 e-border-5" src={publicTheme3} alt="Themes by Fyers"/>
                    <h4>Sustainable earnings</h4>
                    <p className="e-card-p-txt e-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                    <div className="d-flex flex-row d-flex justify-content-between">
                      <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-green">2.6%</span></p>
                      <a aria-label="Invest Now" className="e-a-primary-c" href="/theme-detail/overview">Invest now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 em-display-none em-tablet-display-none e-tl-no-flex-display-none">
                  <div className="e-ptheme-card-wrap e-card-hover">
                    <img className="e-m-bottom-20 e-border-5" src={publicTheme4} alt="Themes by Fyers"/>
                    <h4>Banking tracker</h4>
                    <p className="e-card-p-txt e-c-brown">This is to gain exposure to mergers & amo acquisitions activity among oil & gas companies.</p>
                    <div className="d-flex flex-row d-flex justify-content-between">
                      <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">CARG <span className="e-c-red">0.6%</span></p>
                      <a aria-label="Invest Now" className="e-a-primary-c" href="/theme-detail/overview">Invest now</a>
                    </div>
                  </div>
                </div>
              </div>
              <img className="e-top-theme-pattern-img-2 em-display-none em-tablet-display-none" alt="Fyers pattern"/>
            </div>
            <div className="em-p-left-30">
              <div className="e-card-arrow-wrap e-relative"> 
                <span className="e-m-right-20">
                  <img className="e-ftheme-card-img" src={leftArrow} alt="Left arrow"/>
                </span>
                <span className="active">
                  <img className="e-ftheme-card-img e-right-arrow" src={leftArrow} alt="Right arrow"/>
                </span>
                <a aria-label="More Themes" className="e-c-primary e-m-left-20 e-relative e-top-themes-more-txt e-a-primary-c e-f-weight-500" href="/discover/explore">MORE THEMES</a>
              </div>
            </div>
          </div>
        </section>
        <section className="e-p-top-100 e-p-bottom-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 e-p-bottom-30">
                <h2 className="e-p-bottom-20 e-c-black">Our <br/><span className="e-c-grey">News</span></h2>
                <h5 className="e-c-black">Latest news, breaking stories & more</h5>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 e-p-top-20 e-ptheme-items-wrap e-p-left-0">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 em-display-none">
                  <div className="e-ptheme-card-wrap e-card-hover">
                    <img className="e-m-bottom-10 e-border-5" src={news1} alt="Themes by Fyers"/>
                    <h4>Benefits of Investing in a Diversified Portfolio</h4>
                    <span className="e-x-s-txt e-c-grey">1 day ago</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="e-ptheme-card-wrap e-card-hover">
                    <img className="e-m-bottom-10 e-border-5" src={news2} alt="Themes by Fyers"/>
                    <h4>Don’t Let Your Emotions Drive Investing Decisions</h4>
                    <span className="e-x-s-txt e-c-grey">3 day ago</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 em-display-none em-tablet-display-none">
                  <div className="e-ptheme-card-wrap e-card-hover">
                    <img className="e-m-bottom-10 e-border-5" src={news3} alt="Themes by Fyers"/>
                    <h4>Why Direct Stock Investors Should Invest in Ideas</h4>
                    <span className="e-x-s-txt e-c-grey">4 day ago</span>
                  </div>
                </div>
              </div>
              <img className="e-top-theme-pattern-img-2 em-display-none em-tablet-display-none" alt="Fyers pattern"/>
            </div>
            <div className="em-p-left-30">
              <div className="e-card-arrow-wrap e-relative"> 
                <span className="e-m-right-20">
                  <img className="e-ftheme-card-img" src={leftArrow} alt="Left arrow"/>
                </span>
                <span className="active">
                  <img className="e-ftheme-card-img e-right-arrow" src={leftArrow} alt="Right arrow"/>
                </span>
                <a aria-label="More Themes" className="e-c-primary e-m-left-20 e-relative e-top-themes-more-txt e-a-primary-c e-f-weight-500" href="https://fyers.in/brainstorm/" target="_blank">MORE NEWS</a>
              </div>
            </div>
          </div>
        </section>
        <section className="e-p-top-100 e-p-bottom-100 e-hm-b-subscribe-wrap e-relative">
          <img className="e-footer-pattern" alt="Footer pattern"/>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h2 className="e-p-bottom-20 e-c-white">Know more <br/><span className="e-c-dull-secondary">About Us?</span></h2>
                <h5 className="e-c-white e-hm-how-head-sec em-p-bottom-30">Need clarification for opening an account or have queries?</h5>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 offset-lg-1 d-flex align-items-end ">
                <div className="e-hm-trstwrthy-img-wrap row e-absolute em-p-bottom-30 em-display-none em-tablet-display-none">
                  <img className="e-m-bottom-10 e-m-right-20 e-border-5" src={investorsLogo} alt="Trustful investors"/>
                  <img className="e-m-bottom-10 e-border-5" src={SEBILogo} alt="SEBI registered investment advisor"/> 
                </div>
                <form className="e-hm-subscribe-form align-bottom e-relative">
                  <input id="pnumber" type="text" placeholder="Phone number" required/>
                  <span className="e-hm-subscribe-form-submit e-s-c-btn-up-effect">
                    <img alt="White right arrow"/>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* View History modal*/}
        <div className="modal fade" onClick={this.videoOverlyClick.bind(this)} id="vHistoryModal" role="dialog" aria-labelledby="vHistoryModal Label" aria-hidden="true">
          <div className="modal-dialog e-hm-video-modal"  role="document">
            <div className="modal-content e-hm-video-m-content">
              <button type="button" className="close e-modal-close e-video-close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="e-hm-video-m-wrap"></div>
            </div>
          </div>
        </div>

      </div> 
    ); 
  } 
}

export default Home;
