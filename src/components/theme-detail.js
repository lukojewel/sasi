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

import $ from 'jquery';
import {Line} from 'react-chartjs-2';

class ThemeDetail extends Component {

state = {
  minInvestOpen: false,
  catgryOpen: false,
  riskTypeOpen: false,
  popularityOpen: false,
}
componentDidMount() {
  $("a").tooltip();

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
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
  render() {
    // var data = {
    //     labels: ["January", "February", "March", "April", "May", "June", "July"],
    //     datasets: [
    //       {
    //         label: "My First dataset",
    //         fillColor: "rgba(220,220,220,0.2)",
    //         strokeColor: "rgba(220,220,220,1)",
    //         pointColor: "rgba(220,220,220,1)",
    //         pointStrokeColor: "#fff",
    //         pointHighlightFill: "#fff",
    //         pointHighlightStroke: "rgba(220,220,220,1)",
    //         data: [65, 59, 80, 81, 56, 55, 40]
    //       },
    //       {
    //         label: "My Second dataset",
    //         fillColor: "rgba(151,187,205,0.2)",
    //         strokeColor: "rgba(151,187,205,1)",
    //         pointColor: "rgba(151,187,205,1)",
    //         pointStrokeColor: "#fff",
    //         pointHighlightFill: "#fff",
    //         pointHighlightStroke: "rgba(151,187,205,1)",
    //         data: [28, 48, 40, 19, 86, 27, 90]
    //       }
    //     ]
    //   };
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
        <header className="e-fixed e-bg-white">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img className="e-footer-logo" src={fyersThematicLogo} alt="Fyers Logo"/>
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
        
        <section className="e-p-top-130 e-p-bottom-50 e-td-top-card-bg">
          <div className="container">
            <div className="row">
              <div className="col-12 e-bg-white e-border-5 e-td-top-card e-p-equal-30 d-flex flex-row">
                <div className="col-2 e-p-0">
                  <div className="col-10 e-p-0">
                    <img className="e-m-bottom-10 e-td-theme-img" src={ideaImage1} alt="Themes by Fyers"/>
                    <span className="bg-gradient e-xx-s-txt e-c-white e-p-equal-20 e-td-rcmd-tag e-letter-space-2">RECOMMENDED</span>
                  </div>
                </div>
                <div className="col-6">
                  <h5 className="e-f-weight-600">Rising Rural Demand</h5>
                  <p className="e-card-p-txt e-p-overflow-ellipsis-2L e-c-grey">Consumption in rural India is growing at 1.5x the rate than in urban India. Budget 2018-2019 saw increase outlay of Rs 15000 crore. </p>
                  <div>
                    <span className="e-td-catgry-tag e-bg-light-gray e-m-right-20 e-x-s-txt e-c-brown">Sectoral</span>
                    <span className="e-td-catgry-tag e-bg-light-gray e-m-right-20 e-x-s-txt e-c-brown">Government Policy</span>
                  </div>
                  <div className="e-m-top-20">
                    <span className="e-p-btn e-p-normal-btn e-m-right-20 e-p-btn-up-effect">BUY THEME</span>
                    <span className="e-s-btn e-s-btn-up-effect e-s-normal-btn">CUSTOMIZE</span>
                    <span className="e-m-left-20">
                      <img className="e-wishlist-icon" alt="Wishlist"/>
                    </span>
                  </div>
                </div>
                <div className="col-4 e-border-5 e-p-0 e-td-values-card">
                  <div className="col-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                    <div className="e-s-txt e-f-weight-500 e-c-brown">Index Value 
                      <a href="#" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                        <img className="e-tooltip-icon" alt="Tooltip"/>
                      </a>
                    </div>
                    <div className="e-s-txt e-f-weight-600">314.05
                      <span className="e-loss-value e-x-s-txt"><img/>0.2%</span>
                    </div>
                  </div>
                  <div className="col-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                    <div className="e-s-txt e-f-weight-500 e-c-brown">Monthly Return
                      <a href="#" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                        <img className="e-tooltip-icon" alt="Tooltip"/>
                      </a>
                    </div>
                    <div className="e-s-txt e-f-weight-600 e-c-green">32.6%</div>
                  </div>
                  <div className="col-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                    <div className="e-s-txt e-f-weight-500 e-c-brown">Yearly Return
                      <a href="#" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                        <img className="e-tooltip-icon" alt="Tooltip"/>
                      </a>
                    </div>
                    <div className="e-s-txt e-f-weight-600 e-c-green">0.6%</div>
                  </div>
                  <div className="col-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                    <div className="e-s-txt e-f-weight-500 e-c-brown">Risk
                      <a href="#" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                        <img className="e-tooltip-icon" alt="Tooltip"/>
                      </a>
                    </div>
                    <div className="e-s-txt e-f-weight-600 e-c-yellow">Moderate</div>
                  </div>
                  <div className="col-12 e-p-equal-10 d-flex justify-content-between e-p-bottom-20">
                    <div className="e-s-txt e-f-weight-500 e-c-brown">Min Investment
                      <a href="#" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                        <img className="e-tooltip-icon" alt="Tooltip"/>
                      </a>
                    </div>
                    <div className="e-s-txt e-f-weight-600 e-c-black">₹ 14500.00</div>
                  </div>
                </div>
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
                    <a className="nav-link active e-m-left-0" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true"><span className="e-font-16 e-c-medium-grey e-f-weight-600">Overview</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="stockWeights-tab" data-toggle="tab" href="#stockWeights" role="tab" aria-controls="stockWeights" aria-selected="false"><span className="e-font-16 e-c-medium-grey e-f-weight-600">Stocks & Weights</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="NewsInsights-tab" data-toggle="tab" href="#NewsInsights" role="tab" aria-controls="NewsInsights" aria-selected="false"><span className="e-font-16 e-c-medium-grey e-f-weight-600">News & Insights</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="vHistory-tab" data-toggle="tab" href="#vHistory" role="tab" aria-controls="vHistory" aria-selected="false"><span className="e-font-16 e-c-medium-grey e-f-weight-600">Version History</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="tab-pane fade show active e-p-bottom-100" id="overview" role="tabpanel" aria-labelledby="overview-tab">
          <div className="container">
            <div className="row">
              <div className="col-8 e-p-top-50 e-p-bottom-50">
                <h5 className="e-sec-head e-c-black e-p-bottom-30">WHY INVEST IN THIS <span className="e-c-grey">THEME?</span></h5>
                <p className="e-c-brown e-p-ellipsis">Consumption in rural India is growing at 1.5x the rate than in urban India. Budget 2018-2019  saw increase outlay of Rs 15000 crore. Consumption in rural India is growing at 1.5x the rate than in urban India. Budget 2018-2019  saw increase outlay of Rs 15000 crore.</p>
                <a className="e-c-primary text-uppercase e-f-weight-600"><u>Read More</u></a>
              </div>
              <div className="col-4 e-p-top-50 e-p-bottom-50">
                Created by
                <a href="#" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                  <img className="e-tooltip-icon" alt="Tooltip"/>
                </a>
                <p className="e-c-brown e-p-top-10">Thematic Investments</p>
                <div className="e-p-top-20">
                  <a className="e-c-secondary text-uppercase e-f-weight-600 e-m-right-20">READ BLOG POSTS <img className="e-read-blog-icon" alt="Read Blog"/></a>
                  <a className="e-c-primary text-uppercase e-f-weight-600">METHODOLOGY <img className="e-methodology-icon" alt="Methodology"/></a>
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

        <section className="tab-pane fade e-p-bottom-100" id="stockWeights" role="tabpanel" aria-labelledby="stockWeights-tab">
          <div className="container">
            <div className="row">
              <div className="col-7 e-p-top-50 e-p-bottom-50">
                <h5 className="e-sec-head e-c-black e-p-bottom-30">STOCKS & <span className="e-c-grey">WEIGHTS</span></h5>
                <div className="e-td-sw-table-head d-flex justify-content-between e-m-bottom-10">
                  <div className="e-c-black">Stocks & Segments</div>
                  <div className="e-c-black">Weightage( % )</div>
                </div>
                <div className="col-12 d-flex justify-content-between e-td-sw-table-segment">
                  <div className="e-c-black e-f-weight-600">Cement</div>
                  <div className="e-c-black e-f-weight-600">15.00</div>
                </div>
                <div className="e-td-sw-table-stock-wrap e-p-bottom-10">
                  <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                    <div className="e-c-black e-f-weight-500">Ambuja Cements Ltd</div>
                    <div className="e-c-black e-f-weight-500">15.00</div>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-between e-td-sw-table-segment">
                  <div className="e-c-black e-f-weight-600">Fertilizers & Agro Chemicals</div>
                  <div className="e-c-black e-f-weight-600">25.00</div>
                </div>
                <div className="e-td-sw-table-stock-wrap e-p-bottom-10">
                  <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                    <div className="e-c-black e-f-weight-500">Coromandel International Ltd</div>
                    <div className="e-c-black e-f-weight-500">12.50</div>
                  </div>
                  <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                    <div className="e-c-black e-f-weight-500">Rallis India Pvt Ltd</div>
                    <div className="e-c-black e-f-weight-500">12.50</div>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-between e-td-sw-table-segment">
                  <div className="e-c-black e-f-weight-600">Cement</div>
                  <div className="e-c-black e-f-weight-600">15.00</div>
                </div>
                <div className="e-td-sw-table-stock-wrap e-p-bottom-10">
                  <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                    <div className="e-c-black e-f-weight-500">Ambuja Cements Ltd</div>
                    <div className="e-c-black e-f-weight-500">15.00</div>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-between e-td-sw-table-segment">
                  <div className="e-c-black e-f-weight-600">Fertilizers & Agro Chemicals</div>
                  <div className="e-c-black e-f-weight-600">25.00</div>
                </div>
                <div className="e-td-sw-table-stock-wrap e-p-bottom-10">
                  <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                    <div className="e-c-black e-f-weight-500">Coromandel International Ltd</div>
                    <div className="e-c-black e-f-weight-500">12.50</div>
                  </div>
                  <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                    <div className="e-c-black e-f-weight-500">Rallis India Pvt Ltd</div>
                    <div className="e-c-black e-f-weight-500">12.50</div>
                  </div>
                </div>
              </div>
              <div className="col-5 e-p-top-50 e-p-bottom-50">
                <span className="e-s-txt e-f-weight-500">You can edit stocks & weight before buying</span>
                <div className="e-p-top-20" >
                  <span className="e-s-btn e-s-btn-up-effect e-s-normal-btn">CUSTOMIZE</span>
                </div>
                <h5 className="e-sec-head e-c-black e-p-bottom-30 e-p-top-30">SEGMENT <span className="e-c-grey">COMPOSITION</span></h5>
                <div></div>
                <h5 className="e-sec-head e-c-black e-p-bottom-30 e-p-top-30">REBALANCE <span className="e-c-grey">SCHEDULE</span></h5>
                <div className="d-flex justify-content-between">
                  <div className="e-c-grey e-x-s-txt">Last Rebalance <br/><span className="e-font-15 e-c-black">Dec 14, 2018</span></div>
                  <div className="e-c-grey e-x-s-txt">Next Rebalance <br/><span className="e-font-15 e-c-black">Dec 14, 2018</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tab-pane fade e-p-bottom-100 e-p-top-50" id="NewsInsights" role="tabpanel" aria-labelledby="NewsInsights-tab">
          <div className="container">
            <div className="col-12 d-flex flex-row e-p-equal-30 e-box-shadow-1 e-border-5 e-m-bottom-30">
              <div className="col-3 e-p-left-0">
                <img className="e-border-5 e-full-width" src={publicTheme1} alt="Segment news"/>
              </div>
              <div className="col-9">
                <h4>MSCI’s new methodology may trigger 850 mn outlfow from equities</h4>
                <p className="e-c-brown e-p-bottom-10">Business Standard<span className="e-s-txt e-p-left-10">23h ago</span></p>
                <p className="e-double-l-height e-td-news-content e-m-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly  believable or nice.</p>
              </div>
            </div>
            <div className="col-12 d-flex flex-row e-p-equal-30 e-box-shadow-1 e-border-5 e-m-bottom-30">
              <div className="col-3 e-p-left-0">
                <img className="e-border-5 e-full-width" src={publicTheme1} alt="Segment news"/>
              </div>
              <div className="col-9">
                <h4>MSCI’s new methodology may trigger 850 mn outlfow from equities</h4>
                <p className="e-c-brown e-p-bottom-10">Business Standard<span className="e-s-txt e-p-left-10">23h ago</span></p>
                <p className="e-double-l-height e-td-news-content e-m-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly  believable or nice.</p>
              </div>
            </div>
            <div className="col-12 d-flex flex-row e-p-equal-30 e-box-shadow-1 e-border-5 e-m-bottom-30">
              <div className="col-3 e-p-left-0">
                <img className="e-border-5 e-full-width" src={publicTheme1} alt="Segment news"/>
              </div>
              <div className="col-9">
                <h4>MSCI’s new methodology may trigger 850 mn outlfow from equities</h4>
                <p className="e-c-brown e-p-bottom-10">Business Standard<span className="e-s-txt e-p-left-10">23h ago</span></p>
                <p className="e-double-l-height e-td-news-content e-m-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly  believable or nice.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tab-pane fade e-p-bottom-100 e-p-top-20" id="vHistory" role="tabpanel" aria-labelledby="vHistory-tab">
          <div className="container">
            <div className="row">
              <div className="col-12 e-m-bottom-20 ">
                <div className="d-flex justify-content-between e-td-vh-item-wrap e-p-bottom-20 e-p-top-20">
                  <div className="">
                    <p className="e-f-weight-500 e-m-0">MSCI’s new methodology may trigger 850 mn outlfow from equities</p>
                    <span className="e-s-txt">Jan 04, 2019</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <a className="e-c-primary text-uppercase e-f-weight-600" data-toggle="modal" data-target="#vHistoryModal"><u>VIEW CHANGE</u></a>
                  </div>
                </div>
                <div className="d-flex justify-content-between e-td-vh-item-wrap e-p-bottom-20 e-p-top-20">
                  <div className="">
                    <p className="e-f-weight-500 e-m-0">MSCI’s new methodology may trigger 850 mn outlfow from equities</p>
                    <span className="e-s-txt">Jan 04, 2019</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <a className="e-c-primary text-uppercase e-f-weight-600" data-toggle="modal" data-target="#vHistoryModal"><u>VIEW CHANGE</u></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="e-p-top-50 e-p-bottom-100 e-relative">
          <img className="e-top-theme-pattern-img-1 e-cta-pattern" alt="Fyers pattern"/>
          <div className="container ">
            <div className="row">
              <div className="col-4">
                <h2 className="e-p-bottom-50">Can’t Find What<br/><span className="e-c-secondary">You Need?</span></h2>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <a href="/">
                  <span className="e-p-equal-30 e-cta e-border-5 e-font-18 e-c-black e-f-weight-300 e-cta-create">
                    <img className="e-border-5 e-m-right-20" alt="CTA Icons"/>
                    Create your own
                  </span>
                </a>
              </div>
              <div className="col-4">
                <a href="/">
                  <span className="e-p-equal-30 e-cta e-border-5 e-font-18 e-c-black e-f-weight-300 e-cta-find">
                    <img className="e-border-5 e-m-right-20" alt="CTA Icons"/>
                    Find other available themes
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="modal fade" id="vHistoryModal" role="dialog" aria-labelledby="vHistoryModal Label" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div>
                <button type="button" className="close e-modal-close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body e-td-vh-poup">
                <div className="row">
                  <div className="col-7 e-p-bottom-50">
                    <div className="e-c-black e-p-bottom-20 e-font-18">Weightage changed in ‘Fertilizers & Agro Chemicals’ for performance</div>
                    <div className="e-c-grey e-s-txt e-f-weight-500 e-p-bottom-20">Updated on <span className="e-c-black">Jan 04,2019</span></div>

                    <div className="e-td-sw-table-head d-flex justify-content-between e-m-bottom-10">
                      <div className="e-c-black">Stocks & Segments</div>
                      <div className="e-c-black">Weightage( % )</div>
                    </div>
                    <div className="col-12 d-flex justify-content-between e-td-sw-table-segment">
                      <div className="e-c-black e-f-weight-600">Cement</div>
                      <div className="e-c-black e-f-weight-600">15.00</div>
                    </div>
                    <div className="e-td-sw-table-stock-wrap e-p-bottom-10">
                      <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                        <div className="e-c-black e-f-weight-500">Ambuja Cements Ltd</div>
                        <div className="e-c-black e-f-weight-500">15.00</div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between e-td-sw-table-segment">
                      <div className="e-c-black e-f-weight-600">Fertilizers & Agro Chemicals</div>
                      <div className="e-c-black e-f-weight-600">25.00</div>
                    </div>
                    <div className="e-td-sw-table-stock-wrap e-p-bottom-10">
                      <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                        <div className="e-c-black e-f-weight-500">Coromandel International Ltd</div>
                        <div className="e-c-black e-f-weight-500">12.50</div>
                      </div>
                      <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                        <div className="e-c-black e-f-weight-500">Rallis India Pvt Ltd</div>
                        <div className="e-c-black e-f-weight-500">12.50</div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between e-td-sw-table-segment">
                      <div className="e-c-black e-f-weight-600">Cement</div>
                      <div className="e-c-black e-f-weight-600">15.00</div>
                    </div>
                    <div className="e-td-sw-table-stock-wrap e-p-bottom-10">
                      <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                        <div className="e-c-black e-f-weight-500">Ambuja Cements Ltd</div>
                        <div className="e-c-black e-f-weight-500">15.00</div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between e-td-sw-table-segment">
                      <div className="e-c-black e-f-weight-600">Fertilizers & Agro Chemicals</div>
                      <div className="e-c-black e-f-weight-600">25.00</div>
                    </div>
                    <div className="e-td-sw-table-stock-wrap e-p-bottom-10">
                      <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                        <div className="e-c-black e-f-weight-500">Coromandel International Ltd</div>
                        <div className="e-c-black e-f-weight-500">12.50</div>
                      </div>
                      <div className="col-12 d-flex justify-content-between e-td-sw-table-stock">
                        <div className="e-c-black e-f-weight-500">Rallis India Pvt Ltd</div>
                        <div className="e-c-black e-f-weight-500">12.50</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 e-p-top-50 e-p-bottom-50">
                    <h5 className="e-sec-head e-c-black e-p-bottom-30">SEGMENT <span className="e-c-grey">COMPOSITION</span></h5>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

export default ThemeDetail;
