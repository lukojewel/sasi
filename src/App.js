/*Import Packages*/
import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/*Import pages*/
import Home from './components/home.js';
import Discover from './components/discover.js';
import ThemeDetail from './components/theme-detail.js';
import test from './components/test.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={ThemeDetail}/>
      </BrowserRouter>
    ); 
  } 
}
  
export default App;
