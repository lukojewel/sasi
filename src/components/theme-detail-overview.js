/*Package importing*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import {Line} from 'react-chartjs-2';

import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, Crosshair} from 'react-vis';
import DiscreteColorLegend from '../../node_modules/react-vis/dist/legends/discrete-color-legend';

import DetailCTA from './detail-cta.js';

class ThemeDetailOverview extends Component {

componentDidMount() {
  $("a").tooltip();
}
constructor(props) {
      super(props);
      this.state = {
        crosshairValues: []
      };
    }

  render() {
    const DATA = [
    [
      {x: new Date('01/01/2018'), y: 12},
      {x: new Date('01/14/2018'), y: 50},
      {x: new Date('03/18/2018'), y: 60},
      {x: new Date('04/01/2018'), y: 80},
      {x: new Date('05/14/2018'), y: 75},
      {x: new Date('06/18/2019'), y: 60}
    ],
    [
      {x: new Date('01/01/2018'), y: 30},
      {x: new Date('01/14/2018'), y: 32},
      {x: new Date('03/18/2018'), y: 51},
      {x: new Date('04/01/2018'), y: 80},
      {x: new Date('05/14/2018'), y: 74},
      {x: new Date('06/18/2019'), y: 73}
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
                  {/*<Line data={data}  options={chartOptions} />*/}
                  <div className="e-align-right e-p-bottom-20">
                    <DiscreteColorLegend height={"auto"} width={"100%"} items={ITEMS} colors={COLORS} orientation="horizontal"/>
                  </div>
                  <XYPlot xType="time"
                    Padding={50}
                    onMouseLeave={() => this.setState({crosshairValues: []})}
                    width={920}
                    height={300}>
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <LineSeries color="#ffc000" animation onNearestX={(value, {index}) => this.setState({crosshairValues: DATA.map(d => d[index])})} data={DATA[0]}/>
                    <LineSeries animation onNearestX={(value, {index}) => this.setState({crosshairValues: DATA.map(d => d[index])})} data={DATA[0]} animation data={DATA[1]}/>
                    <Crosshair values={this.state.crosshairValues}/>
                  </XYPlot>
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
