import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div>
        <h1 className="head">UTPC</h1>
        <a className="subtitle" href="/contact">ICPC & Competitive Programming.</a>
        <p className="subtitle"> Powered by <a href="https://www.citadel.com/">Citadel & </a><a href="https://www.citadelsecurities.com/">Citadel Securities.</a></p> 
        </div> 
    );
  }
}

export default Home;
