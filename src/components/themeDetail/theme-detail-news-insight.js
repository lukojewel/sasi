/*Package importing*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import DetailCTA from '../detail-cta.js';
import publicTheme1 from '../../assets/images/publicTheme1.png';

class ThemeDetailNewsInsight extends Component {
  render() {
  
    return (
      <div className="e-body">

        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="nav nav-tabs e-tab-nav-wrap" id="themesTab" role="tablist">
                  <li className="nav-item e-m-left-0">
                    <Link className="nav-link  e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/theme-detail/overview"><span>Overview</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/theme-detail/stockweight"><span>Stocks & Weights</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/theme-detail/news"><span>News & Insights</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/theme-detail/versions"><span>Version History</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="e-p-bottom-100 e-p-top-50" >
          <div className="container">
            <div className="col-12 d-flex flex-row e-p-equal-30 e-box-shadow-1 e-border-5 e-m-bottom-30 e-card-hover">
              <div className="col-3 e-p-left-0">
                <img className="e-border-5 e-full-width" src={publicTheme1} alt="Segment news"/>
              </div>
              <div className="col-9">
                <h4 className="e-f-weight-600">MSCI’s new methodology may trigger 850 mn outlfow from equities</h4>
                <p className="e-c-brown e-p-bottom-10">Business Standard<span className="e-s-txt e-p-left-10">23h ago</span></p>
                <p className="e-double-l-height e-td-news-content e-m-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly  believable or nice.</p>
              </div>
            </div>
            <div className="col-12 d-flex flex-row e-p-equal-30 e-box-shadow-1 e-border-5 e-m-bottom-30 e-card-hover">
              <div className="col-3 e-p-left-0">
                <img className="e-border-5 e-full-width" src={publicTheme1} alt="Segment news"/>
              </div>
              <div className="col-9">
                <h4 className="e-f-weight-600">MSCI’s new methodology may trigger 850 mn outlfow from equities</h4>
                <p className="e-c-brown e-p-bottom-10">Business Standard<span className="e-s-txt e-p-left-10">23h ago</span></p>
                <p className="e-double-l-height e-td-news-content e-m-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly  believable or nice.</p>
              </div>
            </div>
            <div className="col-12 d-flex flex-row e-p-equal-30 e-box-shadow-1 e-border-5 e-m-bottom-30 e-card-hover">
              <div className="col-3 e-p-left-0">
                <img className="e-border-5 e-full-width" src={publicTheme1} alt="Segment news"/>
              </div>
              <div className="col-9">
                <h4 className="e-f-weight-600">MSCI’s new methodology may trigger 850 mn outlfow from equities</h4>
                <p className="e-c-brown e-p-bottom-10">Business Standard<span className="e-s-txt e-p-left-10">23h ago</span></p>
                <p className="e-double-l-height e-td-news-content e-m-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly  believable or nice.</p>
              </div>
            </div>
          </div>
        </section>

        <DetailCTA/>
      </div> 
    ); 
  } 
}

export default ThemeDetailNewsInsight;
