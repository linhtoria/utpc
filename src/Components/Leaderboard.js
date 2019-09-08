import React, { Component } from 'react';
import ReactTable from 'react-table';
import {makeData} from './Data.js';
import './Leaderboard.css';
import 'react-table/react-table.css';

class Leaderboard extends Component {
    constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
                Header: 'First Name',
                accessor: 'firstName'
            },
            {
                Header: 'Last Name',
                accessor: 'lastName'
            }
              
          ]}
          defaultPageSize={20}
          style={{
            height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default Leaderboard;
