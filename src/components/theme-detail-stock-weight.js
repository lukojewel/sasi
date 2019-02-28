/*Package importing*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import DetailCTA from './detail-cta.js';

class ThemeDetailStockWeight extends Component {

componentDidMount() {
  $("a").tooltip();
}

  render() {
    
    return (
      <div className="e-body">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="nav nav-tabs e-tab-nav-wrap" id="themesTab" role="tablist">
                  <li className="nav-item e-m-left-0">
                    <Link className="nav-link e-m-left-0 e-font-16 e-c-medium-grey e-f-weight-600" to="/theme-detail/overview"><span>Overview</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active e-m-left-0 e-font-16 e-c-medium-grey e-f-weight-600" to="/theme-detail/stockweight"><span>Stocks & Weights</span></Link>
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

        <section className="e-p-bottom-100">
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

        <DetailCTA/>
      </div> 
    ); 
  } 
}

export default ThemeDetailStockWeight;
