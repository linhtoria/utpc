import React from 'react';
import Navbar from './Components/Navbar.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/> 
        <h1 className="head">UTPC</h1>
        <a className="subtitle" href="/contact">ICPC & Competitive Programming.</a>
      </header>
    </div>
  );
}

export default App;
