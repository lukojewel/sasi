/*Package importing*/
import React, { Component } from 'react';
import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';


import logo from '../assets/images/logo.svg';
import '../assets/css/global.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    ); 
  } 
}

export default App;
