import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div>
        <h1 className="head">UTPC</h1>
        <a className="subtitle" href="/contact">ICPC & Competitive Programming.</a>
        <footer className="footer">©Linh Nguyen</footer>
        </div> 
    );
  }
}

export default Home;
