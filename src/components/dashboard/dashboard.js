/*Package importing*/
import React, { Component } from 'react';
import $ from 'jquery';

import leftArrow from '../../assets/images/left-arrow.svg';
import ideaImage1 from '../../assets/images/fyers-themes-images-1.png';
import ideaImage2 from '../../assets/images/cthemes3.png';
import ideaImage3 from '../../assets/images/cthemes8.png';
import ideaImage4 from '../../assets/images/cthemes7.png';
import fyersThematicLogo from '../../assets/images/fyers-thematic-logo.png';

import Header from '../header.js';
import {Doughnut} from 'react-chartjs-2';

class Dashboard extends Component {

  render() {

  const data = {
    labels: [
      'Bargain Buys',
      'Automobiles',
    ],
    datasets: [{
      data: [50, 50],
      backgroundColor: [
      '#77b4dd',
      '#6268b9',
      ],
      hoverBackgroundColor: [
      '#77b4dd',
      '#6268b9',
      ],
      borderWidth: ['.5px']
    }]
    };

  const options={
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    legend: {
        display: false,
        
    }
  }

    return (
      <div className="e-body">
        <Header/>
            
            <section className="e-p-top-130 e-p-bottom-50 e-td-top-card-bg" >
              <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
                  <div className="row e-bg-white e-border-5 e-box-shadow-1">
                    <div className="col-lg-7 col-sm-12 col-12 e-p-equal-30 em-p-bottom-30">
                      <div className="row e-m-0 e-dsh-top-card-title e-p-bottom-20">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 e-p-0">
                          <h5 className="e-f-weight-600">Overview</h5>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7 col-6">
                          <h6 className="e-card-p-txt e-f-weight-300">NIFTY <span className="e-f-weight-600 e-dsh-top-card-value">₹ 28405 <span className="e-loss-value e-x-s-txt"><img alt="loss"/>0.2%</span></span></h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10 ">Current Value</div>
                          <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value">₹ 31405</span></h6>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Current Investment</div>
                          <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value">₹ 28405</span></h6>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Current Returns <span className="e-loss-value e-x-s-txt">0.1%</span></div>
                          <h6 className="e-card-p-txt e-c-red"><span className="e-dsh-top-card-value e-f-weight-500">₹ -50</span></h6>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Total Investment</div>
                          <h6 className="e-card-p-txt e-f-weight-500"><span className="e-dsh-top-card-value">₹ 58946</span></h6>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="e-font-13 e-c-brown e-p-top-20 e-p-bottom-10">Total Returns <span className="e-c-green e-x-s-txt">0.25%</span></div>
                          <h6 className="e-card-p-txt e-c-green e-f-weight-500"><span className="e-dsh-top-card-value">₹ 28405</span></h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12 e-bg-light-gray e-p-equal-30 e-dsh-graph-wrap">
                      <div className="e-p-bottom-10">
                        <div className="d-flex flex-row e-doughnut-chart-legend-wrap">
                          <div className="col-6 e-doughnut-chart-legend-item e-font-13 e-c-brown e-p-ellipsis e-align-center"><span style={{background: "#77b4dd"}}></span>Bargain Buys</div>
                          <div className="col-6 e-doughnut-chart-legend-item e-font-13 e-c-brown e-p-ellipsis e-align-center"><span style={{background: "#6268b9"}}></span>Automobiles</div>
                        </div>
                      </div>
                      <div className="e-doughnut-wrap e-p-left-20 e-p-right-20 e-m-left-30 e-m-right-30">
                        <Doughnut data={data} options={options} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        
            <section className="e-p-bottom-50" >
              <div className="container">
                <h5 className="e-sec-head e-c-black e-p-bottom-40">PENDING <span className="e-c-grey">ACTIONS</span></h5>
                <div className="row e-p-bottom-30 ">
                  <div className="col-lg-6  e-dsh-pending-card-wrap ">
                    <div className="media e-bg-light-gray e-p-equal-20 e-border-5 e-card-hover">
                      <img src={ideaImage1} alt="Easy & simple method to invest"/>
                      <div className="media-body e-p-left-20">
                        <h4 className="e-c-black e-m-bottom-0 e-f-weight-500">Automobiles</h4>
                        <span className="e-s-txt e-c-brown"> Some orders were unfilled</span>
                      </div>
                      <span className="e-dsh-pending-card-link">
                        <a href="/" className="e-c-primary text-uppercase e-f-weight-600 e-a-primary-c">REPAIR ORDER</a>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6  e-dsh-pending-card-wrap e-tl-no-flex-display-none">
                    <div className="media e-bg-light-gray e-p-equal-20 e-border-5 e-card-hover">
                      <img src={ideaImage2} alt="Easy & simple method to invest"/>
                      <div className="media-body e-p-left-20">
                        <h4 className="e-c-black e-m-bottom-0 e-f-weight-500">Banking</h4>
                        <span className="e-s-txt e-c-brown"> Testing Bank stocks</span>
                      </div>
                      <span className="e-dsh-pending-card-link">
                        <a href="/" className="e-c-primary text-uppercase e-f-weight-600 e-a-primary-c">COMPLETE THEME</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="e-card-arrow-wrap "> 
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
        

      </div> 
    ); 
  } 
}
export default Dashboard;
