/*Package importing*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import {Line} from 'react-chartjs-2';

import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, Crosshair} from 'react-vis';
import DiscreteColorLegend from '../../../node_modules/react-vis/dist/legends/discrete-color-legend';

import DetailCTA from '../detail-cta.js';

class ThemeDetailOverview extends Component {

componentDidMount() {
  $("a").tooltip();
}
constructor(props) {
  super(props);
  this.state = {
    crosshairValues: [],
    whyInvestReadMore: false,
  };
}

whyInvestReadMoreClick() {
  this.setState({
      whyInvestReadMore: !this.state.whyInvestReadMore
  })
}

  render() {
    const DATA = [
    [
      {x: new Date('01/01/2018'), y: 100},
      {x: new Date('02/14/2018'), y: 201},
      {x: new Date('03/18/2018'), y: 301},
      {x: new Date('04/01/2018'), y: 401},
      {x: new Date('05/14/2018'), y: 551},
      {x: new Date('06/18/2018'), y: 601},
      {x: new Date('07/18/2018'), y: 761},
      {x: new Date('08/14/2018'), y: 841},
      {x: new Date('09/18/2018'), y: 901},
      {x: new Date('10/14/2018'), y: 1001},
      {x: new Date('11/14/2018'), y: 1101},
      {x: new Date('12/01/2018'), y: 1201},
      {x: new Date('01/01/2019'), y: 1301}
    ],
    [
      {x: new Date('01/01/2018'), y: 100},
      {x: new Date('02/14/2018'), y: 224},
      {x: new Date('03/18/2018'), y: 321},
      {x: new Date('04/01/2018'), y: 421},
      {x: new Date('05/14/2018'), y: 521},
      {x: new Date('06/18/2018'), y: 631},
      {x: new Date('07/18/2018'), y: 721},
      {x: new Date('08/14/2018'), y: 861},
      {x: new Date('09/18/2018'), y: 921},
      {x: new Date('10/14/2018'), y: 1221},
      {x: new Date('11/14/2018'), y: 1121},
      {x: new Date('12/01/2018'), y: 1221},
      {x: new Date('01/01/2019'), y: 1321}
    ]
  ];

  const DATA2 = [
    [
      {x: new Date('01/01/2018'), y: 134},
      {x: new Date('02/14/2018'), y: 124},
      {x: new Date('03/18/2018'), y: 145},
      {x: new Date('04/01/2018'), y: 134},
      {x: new Date('05/14/2018'), y: 134},
      {x: new Date('06/18/2018'), y: 123},
      {x: new Date('07/18/2018'), y: 245},
      {x: new Date('08/14/2018'), y: 234},
      {x: new Date('09/18/2018'), y: 245},
      {x: new Date('10/14/2018'), y: 267},
      {x: new Date('11/14/2018'), y: 456},
      {x: new Date('12/01/2018'), y: 432},
      {x: new Date('01/01/2019'), y: 478}
    ],
    [
      {x: new Date('01/01/2018'), y: 100},
      {x: new Date('02/14/2018'), y: 224},
      {x: new Date('03/18/2018'), y: 321},
      {x: new Date('04/01/2018'), y: 421},
      {x: new Date('05/14/2018'), y: 521},
      {x: new Date('06/18/2018'), y: 631},
      {x: new Date('07/18/2018'), y: 721},
      {x: new Date('08/14/2018'), y: 861},
      {x: new Date('09/18/2018'), y: 921},
      {x: new Date('10/14/2018'), y: 1221},
      {x: new Date('11/14/2018'), y: 1121},
      {x: new Date('12/01/2018'), y: 1221},
      {x: new Date('01/01/2019'), y: 1321}
    ]
  ];


  const ITEMS = [
    'Theme',
    'NIFTY'
  ];

  const COLORS = [
    '#298eed',
    '#ffc000'
  ];
    return (
      <div className="e-body">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="nav nav-tabs e-tab-nav-wrap" id="themesTab" role="tablist">
                  <li className="nav-item e-m-left-0">
                    <Link className="nav-link active e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/theme-detail/overview"><span>Overview</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/theme-detail/stockweight"><span>Stocks & Weights</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/theme-detail/news"><span>News & Insights</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300" to="/theme-detail/versions"><span>Version History</span></Link>
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
                
                {
                  this.state.whyInvestReadMore ?
                  <span>
                    <p className="e-c-brown ">Consumption in rural India is growing at 1.5x the rate than in urban India. Budget 2018-2019  saw increase outlay of Rs 15000 crore. Consumption in rural India is growing at 1.5x the rate than in urban India. Budget 2018-2019  saw increase outlay of Rs 15000 crore.</p>
                    <a onClick={this.whyInvestReadMoreClick.bind(this)} className="e-c-primary text-uppercase e-f-weight-600 e-a-primary-c">Read Less</a>
                  </span>
                  :
                  <span>
                    <p className="e-c-brown e-p-ellipsis ">Consumption in rural India is growing at 1.5x the rate than in urban India. Budget 2018-2019  saw increase outlay of Rs 15000 crore. Consumption in rural India is growing at 1.5x the rate than in urban India. Budget 2018-2019  saw increase outlay of Rs 15000 crore.</p>
                    <a onClick={this.whyInvestReadMoreClick.bind(this)} className="e-c-primary text-uppercase e-f-weight-600 e-a-primary-c">Read More</a>
                  </span>
                }
                
              </div>
              <div className="col-4 e-p-top-50 e-p-bottom-50">
                Created by
                <a href="/" data-toggle="tooltip" data-placement="right" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et">
                  <img className="e-tooltip-icon" alt="Tooltip"/>
                </a>
                <p className="e-c-brown e-p-top-10">Thematic Investments</p>
                <div className="e-p-top-20">
                  <a href="/" className="e-c-secondary text-uppercase e-f-weight-600 e-m-right-20 e-a-secondary-c ">READ BLOG POSTS <img className="e-read-blog-icon" alt="Read Blog"/></a>
                  <a href="/" className="e-c-primary text-uppercase e-f-weight-600 e-a-primary-c">METHODOLOGY <img className="e-methodology-icon" alt="Methodology"/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade show active e-p-bottom-50" id="overview" role="tabpanel" aria-labelledby="overview-tab">
            <div className="container">
              <div className="row">
                <div className="col-8 e-p-top-50 e-p-bottom-20">
                  <h5 className="e-sec-head e-c-black ">THEME PERFORMANCE VS <span className="e-c-grey">NIFTY</span></h5>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ul className="nav nav-tabs nav-tabs-style-2 e-tab-nav-wrap" id="themesTab" role="tablist">
                    <li className="active" className="nav-item e-m-left-0">
                      <a data-toggle="tab" href="#menu1" className="nav-link active e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300 e-no-transition" to="/theme-detail/overview"><span>LUMPSUM</span></a>
                    </li>
                    <li className="nav-item">
                      <a data-toggle="tab" href="#menu2" className="nav-link e-m-left-0 e-font-18 e-c-medium-grey e-f-weight-300 e-no-transition" to="/theme-detail/stockweight"><span>SIP</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div id="menu1"  className="row tab-pane active">
                  <div className="col-10">
                    {/*<Line data={data}  options={chartOptions} />*/}
                    <div className="d-flex justify-content-end e-p-top-20 e-doughnut-chart-legend-wrap e-align-right">
                      <div className="e-doughnut-chart-legend-item e-font-13 e-c-brown e-p-right-30"><span style={{background: "#ffc000"}}></span>NIFTY</div>
                      <div className="e-doughnut-chart-legend-item e-font-13 e-c-brown"><span style={{background: "#36A2EB"}}></span>Themes</div>
                    </div>
                    <XYPlot xType="time"
                      yDomain={[0, 1500]}
                      onMouseLeave={() => this.setState({crosshairValues: []})}
                      width={950}
                      height={380}>
                      <HorizontalGridLines style={{strokeWidth: .5}}/>
                      <XAxis style={{strokeWidth: .1}} />
                      <YAxis style={{strokeWidth: .1}} />
                      <LineSeries  color="#ffc000" animation onNearestX={(value, {index}) => this.setState({crosshairValues: DATA.map(d => d[index])})} data={DATA[0]}/>
                      <LineSeries animation onNearestX={(value, {index}) => this.setState({crosshairValues: DATA.map(d => d[index])})} data={DATA[0]} animation data={DATA[1]}/>
                      <Crosshair values={this.state.crosshairValues}/>
                    </XYPlot>
                  </div>
                </div>

                <div id="menu2" className="row tab-pane fade">
                  <div className="col-10">
                    {/*<Line data={data}  options={chartOptions} />*/}
                    <div className="d-flex justify-content-end e-p-top-20 e-doughnut-chart-legend-wrap e-align-right">
                      <div className="e-doughnut-chart-legend-item e-font-13 e-c-brown e-p-right-30"><span style={{background: "#ffc000"}}></span>NIFTY</div>
                      <div className="e-doughnut-chart-legend-item e-font-13 e-c-brown"><span style={{background: "#36A2EB"}}></span>Themes</div>
                    </div>
                    <XYPlot xType="time"
                      yDomain={[0, 1500]}
                      onMouseLeave={() => this.setState({crosshairValues: []})}
                      width={950}
                      height={380}>
                      <HorizontalGridLines style={{strokeWidth: .5}}/>
                      <XAxis style={{strokeWidth: .1}} />
                      <YAxis style={{strokeWidth: .1}} />
                      <LineSeries  color="#ffc000" animation onNearestX={(value, {index}) => this.setState({crosshairValues: DATA2.map(d => d[index])})} data={DATA2[0]}/>
                      <LineSeries animation onNearestX={(value, {index}) => this.setState({crosshairValues: DATA2.map(d => d[index])})} data={DATA2[0]} animation data={DATA2[1]}/>
                      <Crosshair values={this.state.crosshairValues}/>
                    </XYPlot>
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

export default ThemeDetailOverview;
