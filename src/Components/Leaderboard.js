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
      <div id="table">
        <ReactTable
          data={data}
          columns={[
            {
                Header: 'Rank',
                accessor: 'rank'
            },
            {
                Header: 'Username',
                accessor: 'username'
            },
            {
                Header: 'C1',
                accessor: 'c1'
            },
            {
                Header: 'C2',
                accessor: 'c2'
            },

            {
                Header: 'Total',
                accessor: 'total'
            },
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
