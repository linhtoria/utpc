import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
        <div className="Nav-container">
            <a className="Nav-item" href="/">Home</a>
            <a className="Nav-item" href="/about">About</a>
            <a className="Nav-item" href="/leaderboard">Leaderboard</a>
            <a className="Nav-item" href="/contact">Contact</a>
        </div>
    );
  }
}

export default Navbar;
