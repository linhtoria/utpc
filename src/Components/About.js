import React, { Component } from 'react';
import './Page.css';

class About extends Component {
    render() {
      return (
         <div className="About-container">
           <p className="header">About</p>
           <p className="content">UT Programming Contest (UTPC) is a chapter of the International Collegiate <br/> Programming Contest (ICPC).</p>
           <p className="content"> We put on bi-weekly competitive programming contests on Fridays <br/> in GDC 2.216, everyone is welcomed!</p> 
           <p className="content"> In addition, there is a one-hour
              <a href="https://www.cs.utexas.edu/users/utpc/"> competitive programming class</a> taught at UT. <br/> Reach out to <a href="https://www.cs.utexas.edu/users/evouga/">
              Professor Vouga</a> or UTPC officers if you want to learn more.
          </p>
         </div>
     );
   }
 }

export default About;
