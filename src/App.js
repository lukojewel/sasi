/*Import Packages*/
import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import fyersThematicLogo from './assets/images/fyers-thematic-logo.png';

/*Import pages*/
import Home from './components/home.js';
import Discover from './components/discover/discover.js';
import DiscoverExplore from './components/discover/discover-explore.js';
import DiscoverFyersThemes from './components/discover/discover-fyers-themes.js';
import DiscoverPublicThemes from './components/discover/discover-public-themes.js';
import ThemeDetail from './components/themeDetail/theme-detail.js';
import ThemeDetailOverview from './components/themeDetail/theme-detail-overview.js';
import ThemeDetailStockWeight from './components/themeDetail/theme-detail-stock-weight.js';
import ThemeDetailNewsInsight from './components/themeDetail/theme-detail-news-insight.js';
import ThemeDetailVersionHistory from './components/themeDetail/theme-detail-version-history.js';
import test from './components/test.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      	<div>
	        <Route path="/" exact component={Home}/>
	        <Route path="/discover" component={Discover}/>
	        <Route path="/discover/explore" component={DiscoverExplore}/>
	        <Route path="/discover/fyers-themes" component={DiscoverFyersThemes}/>
	        <Route path="/discover/public-themes" component={DiscoverPublicThemes}/>
	        <Route path="/theme-detail" component={ThemeDetail}/>
	        <Route path="/theme-detail/overview" component={ThemeDetailOverview}/>
	        <Route path="/theme-detail/stockweight" component={ThemeDetailStockWeight}/>
	        <Route path="/theme-detail/news" component={ThemeDetailNewsInsight}/>
	        <Route path="/theme-detail/versions" component={ThemeDetailVersionHistory}/>
	        
	        <footer className="e-p-top-100 e-p-bottom-100 e-bg-light-gray">
	          <div className="container e-footer-container">
	            <div className="row">
	              <div className="col-4 e-footer-items-wrap">
	                <img className="e-m-bottom-20 e-m-right-20 e-footer-logo" src={fyersThematicLogo} alt="Fyers Logo"/>
	                <p className="e-m-0 e-c-grey e-card-p-txt e-footer-dbl-lh">CIN :U74900KA2015HYFM09H<br/>GSTIN :U74900KA2015HYFM09H<br/>SEBI Research Analyst INH20987532</p>
	              </div>
	              <div className="col-4 e-footer-items-wrap">
	                <h4 className="e-m-bottom-10">Registered address</h4>
	                <p className="e-m-0 e-c-grey e-card-p-txt e-footer-dbl-lh">No.19 & 20, 3rd Main, Gandhinagar,<br/>Bangalore 560009<br/>Call: 080 4625 1111</p>
	              </div>
	              <div className="col-4 e-footer-items-wrap ">
	                <h4 className="e-m-bottom-10">Connect with us 
	                  <a className="e-no-animation" aria-label="Facebook" href="/"><span className="e-f-fb-logo e-f-social-logo e-relative e-no-animation e-card-hover"></span></a>
	                  <a className="e-no-animation" aria-label="Twitter" href="/"><span className="e-f-tw-logo e-f-social-logo e-relative e-no-animation e-card-hover"></span></a>
	                  <a className="e-no-animation" aria-label="You Tube" href="/"><span className="e-f-yt-logo e-f-social-logo e-relative  e-card-hover"></span></a>
	                </h4>
	                <p className="e-m-0 e-c-grey e-card-p-txt e-f-para">For any complaints pertaining to securities broking please write to complaints@fyers.com for DP related to dp@fyers.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
	              </div>
	            </div>
	          </div>
	        </footer>


        </div>
      </BrowserRouter>
    ); 
  } 
}
  
export default App;
