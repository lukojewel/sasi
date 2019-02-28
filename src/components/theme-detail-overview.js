/*Package importing*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import {Line} from 'react-chartjs-2';

import DetailCTA from './detail-cta.js';

class ThemeDetailOverview extends Component {

componentDidMount() {
  $("a").tooltip();
}

  render() {
      const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Axis Bank',
          fill: false,
          lineTension: 0,
          backgroundColor: '#fff',
          borderColor: '#2e42b6',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#2e42b6',
          pointHoverBorderColor: '#2e42b6',
          pointHoverBorderWidth: 1,
          pointRadius: 0,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
          scaleShowGridLines : true,
          bezierCurve : false,
          pointDot : false,
        },
        {
          label: 'ICICI Bank',
          fill: false,
          lineTension: 0,
          backgroundColor: '#fff',
          borderColor: '#298eed',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#298eed',
          pointHoverBorderColor: '#298eed',
          pointHoverBorderWidth: 1,
          pointRadius: 0,
          pointHitRadius: 10,
          data: [42, 56, 41, 67, 74, 86, 91],
          scaleShowGridLines : true,
          showXLabels: 2,
          bezierCurve : false,
          pointDot : false,
          strokeStyle: '#298eed',
          legend: {
            "position": "top",
            "usePointStyle": true,
            }
        }
      ]
    };

    var chartOptions = {
      scaleShowGridLines : true,
      bezierCurve : false,
      pointDot : true,
      legend: {
        "position": "top",
        "usePointStyle": true,
        }
    }
    return (
      <div className="e-body">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="nav nav-tabs e-tab-nav-wrap" id="themesTab" role="tablist">
                  <li className="nav-item e-m-left-0">
                    <Link className="nav-link active e-m-left-0 e-font-16 e-c-medium-grey e-f-weight-600" to="/theme-detail/overview"><span>Overview</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-16 e-c-medium-grey e-f-weight-600" to="/theme-detail/stockweight"><span>Stocks & Weights</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-16 e-c-medium-grey e-f-weight-600" to="/theme-detail/news"><span>News & Insights</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-16 e-c-medium-grey e-f-weight-600" to="/theme-detail/versions"><span>Version History</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="e-p-bottom-100" >
          <div className="container">
            <div className="row">
              <div className="col-8 e-p-top-50 e-p-bottom-50">
                <h5 className="e-sec-head e-c-black e-p-bottom-30">WHY INVEST IN THIS <span className="e-c-grey">THEME?</span></h5>
                <p className="e-c-brown e-p-ellipsis">Consumption in rural India is growing at 1.5x the rate than in urban India. Budget 2018-2019  saw increase outlay of Rs 15000 crore. Consumption in rural India is growing at 1.5x the rate than in urban India. Budget 2018-2019  saw increase outlay of Rs 15000 crore.</p>
                <a href="/" className="e-c-primary text-uppercase e-f-weight-600"><u>Read More</u></a>
              </div>
              <div className="col-4 e-p-top-50 e-p-bottom-50">
                Created by
                <a href="/" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                  <img className="e-tooltip-icon" alt="Tooltip"/>
                </a>
                <p className="e-c-brown e-p-top-10">Thematic Investments</p>
                <div className="e-p-top-20">
                  <a href="/" className="e-c-secondary text-uppercase e-f-weight-600 e-m-right-20">READ BLOG POSTS <img className="e-read-blog-icon" alt="Read Blog"/></a>
                  <a href="/" className="e-c-primary text-uppercase e-f-weight-600">METHODOLOGY <img className="e-methodology-icon" alt="Methodology"/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade show active e-p-bottom-50" id="overview" role="tabpanel" aria-labelledby="overview-tab">
            <div className="container">
              <div className="row">
                <div className="col-8 e-p-top-50 e-p-bottom-50">
                  <h5 className="e-sec-head e-c-black e-p-bottom-30">THEME PERFORMANCE VS <span className="e-c-grey">NIFTY</span></h5>
                </div>
              </div>
              <div className="row">
                <div className="col-11">
                <Line data={data}  options={chartOptions} />
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

export default ThemeDetailOverview;
