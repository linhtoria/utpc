import React, { Component } from 'react'; import './Page.css';

class Contact extends Component {
    render() {
      return (
         <div className="Page-container">
          <p className="header">Contact</p>
          <ul className="content">
            <li>Kevin Chen - Co-President</li>
            <li>Kevin Chen - Co-President</li> <li>Aditya Arjun - Logistics</li>
            <li>Kevin Li - Tech</li>
            <li>Linh Nguyen - Outreach</li>
          </ul>
         </div>
     );
   }
 }

export default Contact;
