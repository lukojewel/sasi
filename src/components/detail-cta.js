/*Package importing*/
import React, { Component } from 'react';

class DetailCTA extends Component {
  render() {
    return (
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
    ); 
  } 
}

export default DetailCTA;
