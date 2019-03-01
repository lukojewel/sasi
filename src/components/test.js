import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, Crosshair} from 'react-vis';
import DiscreteColorLegend from '../../node_modules/react-vis/dist/legends/discrete-color-legend';

const DATA = [
  [
    {x: new Date('01/01/2018'), y: 12},
    {x: new Date('01/14/2018'), y: 50},
    {x: new Date('03/18/2018'), y: 60},
    {x: new Date('04/01/2018'), y: 100},
    {x: new Date('05/14/2018'), y: 110},
    {x: new Date('06/18/2018'), y: 60}
  ],
  [
    {x: new Date('01/01/2018'), y: 30},
    {x: new Date('01/14/2018'), y: 32},
    {x: new Date('03/18/2018'), y: 51},
    {x: new Date('04/01/2018'), y: 80},
    {x: new Date('05/14/2018'), y: 101},
    {x: new Date('06/18/2018'), y: 124}
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

class test extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      crosshairValues: []
	    };
	  }
  render() {
    return (
    	<div>
    	<DiscreteColorLegend height={200} width={300} items={ITEMS} colors={COLORS} orientation="horizontal"/>
	      <XYPlot xType="time"
	        onMouseLeave={() => this.setState({crosshairValues: []})}
	        width={700}
	        height={300}>
	        <HorizontalGridLines />
	        <XAxis />
	        <YAxis />
	        <LineSeries color="#ffc000" animation onNearestX={(value, {index}) => this.setState({crosshairValues: DATA.map(d => d[index])})} data={DATA[0]}/>
	        <LineSeries animation onNearestX={(value, {index}) => this.setState({crosshairValues: DATA.map(d => d[index])})} data={DATA[0]} animation data={DATA[1]}/>
	        <Crosshair values={this.state.crosshairValues}/>
	      </XYPlot>
      </div>
    );
  }
}


export default test;
