/*Import Packages*/
import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/*Import pages*/
import Home from './components/home.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
      </BrowserRouter>
    ); 
  } 
}

export default App;
