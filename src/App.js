import React from 'react';
import Navbar from './Components/Navbar.js'
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import History from './history.js';
import About from './Components/About.js';
import Home from './Components/Home.js';
import Contact from './Components/Contact.js';
import Leaderboard from './Components/Leaderboard.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router history={History}>
           <Switch>
             <Route exact path="/about" component={About}/>
             <Route exact path="/leaderboard" component={Leaderboard}/>
             <Route exact path="/contact" component={Contact}/>
             <Route exact path="/" component={Home}/>
           </Switch>
        </Router>
        <Navbar/> 
      </header>
    </div>
  );
}

export default App;
