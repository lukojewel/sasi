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
import $ from 'jquery';
import config from './../../config/config';

import fyersThematicLogo from '../../assets/images/fyers-thematic-logo.png';

import Header from '../header.js';
import DetailCTA from '../detail-cta.js';

class DiscoverExplore extends Component {

  state = {
    minInvestOpen: false,
    catgryOpen: false,
    riskTypeOpen: false,
    popularityOpen: false,
    topRecommended: [],
    topPerforming: [],
    offset: 0
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
  componentDidMount(){
    this.getRecommended(0);
    this.getTopPerforming(0);
  }
  //getting data
  getRecommended(offset){
    $.ajax({
        type: "POST",
        url: config.server + "themes/fyers",
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({ 
          offset: offset,
          tab: 0
        })
    }).then(function (response) {
      console.log(response)
      if (response.status) {
          var responseData = response.data;
          var data = this.state.topRecommended;
          var newData = data.concat(responseData);
          var offset = newData.length;
          this.setState({ 
              topRecommended: newData, 
              offset: offset, 
              loading: false
          });
      } else {

      }
    }.bind(this)).fail(function(error){
        this.setState({loading: false})
        console.log(error)
    }.bind(this))
  }
  getTopPerforming(offset){
    $.ajax({
        type: "GET",
        url: config.server + "themes/list",
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(function (response) {
      console.log(response)
      if (response.status) {
          var responseData = response.data;
          var data = this.state.topPerforming;
          var newData = data.concat(responseData);
          var offset = newData.length;
          this.setState({ 
              topPerforming: newData, 
              offset: offset, 
              loading: false
          });
      } else {

      }
    }.bind(this)).fail(function(error){
        this.setState({loading: false})
        console.log(error)
    }.bind(this))
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
              <div className="tab-content e-p-top-50 " id="themesTabContent">
                <h5 className="e-sec-head e-c-black e-p-bottom-50">HIGHLY <span className="e-c-grey">RECOMMENDED</span></h5>
                <div className="">
                    <div className="row ">
                    {
                      this.state.topRecommended.map(function(theme, index){
                        return(
                          <div key={index} className="col-lg-6 e-p-bottom-30"> 
                            <div className="col-lg-12 e-bg-white e-ftheme-card-wrap e-card-hover">
                              <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                                  <h4 className="e-f-weight-600">{theme.name}</h4>
                                  <p className="e-card-p-txt e-p-bottom-10 e-c-brown ">{theme.long_description.substring(0, 100)}...</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                  <img className="e-ftheme-card-img e-m-bottom-10 e-m-max-width-full" src={theme.image} alt="Themes by Fyers"/>
                                </div>
                                <div className="col-lg-12">
                                  <div className="row">
                                    <div className="col-lg-5 col-md-7 col-sm-7 col-7">
                                      <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                        Yearly Return <span className="e-c-green e-f-weight-500"> {theme.yearly_return}%</span>
                                      </p> 
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                                      <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                        Monthly Return <span className="e-c-green e-f-weight-500"> {theme.monthly_return}%</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-5 col-md-7 col-sm-7 col-7">
                                      <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                        Min Investment <span className="e-c-black e-f-weight-500"> ₹{theme.min_investment}</span>
                                      </p>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                                      <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                        Index Value <span className="e-c-red e-f-weight-500"> {theme.index_value}</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>{/*Responsive*/}
                          </div> 
                        )
                      }.bind(this))
                    }
                      {/*
                      <div className="col-lg-6 e-p-bottom-30 e-tl-no-flex-display-none"> 
                        <div className="col-lg-12 e-bg-white e-ftheme-card-wrap e-card-hover">
                          <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                              <h4 className="e-f-weight-600">Sustainable Earnings</h4>
                              <p className="e-card-p-txt e-p-bottom-10 e-c-brown ">This is to gain exposure to mergers & acquisitions activity among oil & gas companies. Get a complete picture of the energy investment section and decid.</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                              <img className="e-ftheme-card-img e-m-bottom-10 e-m-max-width-full" src={ideaImage3} alt="Themes by Fyers"/>
                            </div>
                            <div className="col-lg-12">
                              <div className="row">
                                <div className="col-lg-5 col-md-7 col-sm-7 col-7">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                    Yearly Return <span className="e-c-green e-f-weight-500"> 15.5%</span>
                                  </p> 
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                                  <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                    Monthly Return <span className="e-c-green e-f-weight-500"> 0.6%</span>
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-5 col-md-7 col-sm-7 col-7">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                    Min Investment <span className="e-c-black e-f-weight-500"> ₹11900.00</span>
                                  </p>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                                  <p className="e-card-pl-txt e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                                    Risk <span className="e-c-green e-f-weight-500"> Low</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      */}
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
              <div className="col-lg-12 e-p-top-50 e-ptheme-items-wrap e-p-left-0 e-p-right-0">
                <div className="row">
                {
                  this.state.topPerforming.map(function(theme, index){
                    return(
                      <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                        <div className="e-ptheme-card-wrap e-card-hover e-p-bottom-10">
                          <img className="e-m-bottom-10 e-border-5" src={theme.image} alt="Themes by Fyers"/>
                          <h4 className="e-f-weight-600">{theme.name}</h4>
                          <p className="e-card-p-txt e-c-brown e-p-bottom-10">{theme.long_description.substring(0,80)}...</p>
                          <div className="d-flex flex-row justify-content-between">
                            <p className="e-card-chrg-txt e-c-brown mt-auto e-p-0 e-m-0">Index <span className="e-c-green">{theme.index_value}%</span></p>
                            <p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Monthly Return <span className="e-c-green e-f-weight-500"> {theme.monthly_return}%</span>
                            </p>
                          </div>
                          <div className="d-flex flex-row justify-content-between"><p className="e-card-pl-txt  e-p-bottom-10 e-m-0 e-c-brown e-f-weight-300">
                              Min Investment <span className="e-c-black e-f-weight-500"> ₹{theme.min_investment}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                      
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
                  <h5 className="e-sec-head e-c-black e-p-bottom-20">RECENTLY <span className="e-c-grey">VIEWED</span></h5>
                </div>
              </div>
              <div className="col-lg-12 e-p-top-20 e-ptheme-items-wrap e-p-left-0 e-p-right-0">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="e-ptheme-card-wrap e-card-hover">
                      <img className="e-m-bottom-10 e-border-5 e-full-width" src={news4} alt="Themes by Fyers"/>
                      <h4 className="e-p-bottom-20 e-f-weight-600">Use of plastic</h4>
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
                      <img className="e-m-bottom-10 e-border-5" src={news5} alt="Themes by Fyers"/>
                      <h4 className="e-p-bottom-20 e-f-weight-600">IT enabled</h4>
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
                      <img className="e-m-bottom-10 e-border-5" src={news6} alt="Themes by Fyers"/>
                      <h4 className="e-p-bottom-20 e-f-weight-600">Low risk smart beta</h4>
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
                      <img className="e-m-bottom-10 e-border-5" src={news7} alt="Themes by Fyers"/>
                      <h4 className="e-p-bottom-20 e-f-weight-600">Dividend aristocrats</h4>
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
                    <div className="media e-dv-s-believes-causes-wrap e-p-equal-15 e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <img alt="Easy & simple method to invest"/>
                      <div className="media-body e-p-left-20">
                        <p className="e-c-black e-m-bottom-0">Social Believes & Causes</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 23 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="media e-dv-investStrategies-wrap e-p-equal-15 e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <img alt="Easy & simple method to invest"/>
                      <div className="media-body e-p-left-20">
                        <p className="e-c-black e-m-bottom-0">Investing Strategies</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 23 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="media e-dv-dividends-wrap e-p-equal-15 e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <img alt="Easy & simple method to invest"/>
                      <div className="media-body e-p-left-20">
                        <p className="e-c-black e-m-bottom-0">Dividends & Income</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 23 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="media e-dv-geographic-wrap e-p-equal-15 e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <img alt="Easy & simple method to invest"/>
                      <div className="media-body e-p-left-20">
                        <p className="e-c-black e-m-bottom-0">Geographic Collections</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 23 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="media e-dv-government-wrap e-p-equal-15 e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <img alt="Easy & simple method to invest"/>
                      <div className="media-body e-p-left-20">
                        <p className="e-c-black e-m-bottom-0">Government Policies</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 23 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="media e-dv-trackers-wrap e-p-equal-15 e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <img alt="Easy & simple method to invest"/>
                      <div className="media-body e-p-left-20">
                        <p className="e-c-black e-m-bottom-0">Sectional Trackers</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 23 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="media e-dv-trends-wrap e-p-equal-15 e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <img alt="Easy & simple method to invest"/>
                      <div className="media-body e-p-left-20">
                        <p className="e-c-black e-m-bottom-0">Current Trends</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 24 Themes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="media e-dv-conglomerates-wrap e-p-equal-15 e-bg-white e-m-bottom-30 e-border-5 e-box-shadow-1 e-card-hover">
                      <img alt="Easy & simple method to invest"/>
                      <div className="media-body e-p-left-20">
                        <p className="e-c-black e-m-bottom-0">Groups & Conglomerates</p>
                        <span className="e-gradiant-txt text-monospace e-s-txt text-uppercase"> 14 Themes</span>
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
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={cthemes1} alt="Themes by Fyers"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Medicine</h5>
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
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={cthemes2} alt="Themes by Fyers"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Core sectors of India</h5>
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
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={cthemes3} alt="Themes by Fyers"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Private Bankers</h5>
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
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={cthemes4} alt="Themes by Fyers"/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 em-p-top-30">
                  <h5 className="e-sec-head e-c-black e-p-bottom-40 e-f-para">LATEST <br/><span className="e-c-grey">COMMUNITY THEMES</span></h5>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Retail Shopping</h5>
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
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={cthemes5} alt="Themes by Fyers"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">IT Enabled</h5>
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
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={cthemes6} alt="Themes by Fyers"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Low Risk Smart beta</h5>
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
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={cthemes7} alt="Themes by Fyers"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12 e-bg-light-gray e-p-equal-20 e-p-bottom-10 e-border-5 d-flex flex-row  e-box-shadow-1 e-m-bottom-30 e-card-hover">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 e-p-0">
                      <h5 className="e-p-bottom-10 e-f-weight-500">Magic Formula</h5>
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
                      <img className="e-ftheme-card-img e-m-bottom-10 e-full-width e-max-width-full" src={cthemes8} alt="Themes by Fyers"/>
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
