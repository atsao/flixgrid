import React, { Component } from 'react';

import data from '../data.json';

import Table from './Table';

class Flixgrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      sort: {},
      filters: [],
    };
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          data,
        });
      },
      1000
    );
  }

  render() {
    const { data } = this.state;
    const columns = [
      {
        dataKey: 'title',
        display: 'Title',
        render: data => <strong>{data}</strong>,
      },
      {
        dataKey: 'releaseYear',
        display: 'Release Year',
      },
      {
        dataKey: 'rating',
        display: 'Rating',
      },
      {
        dataKey: 'genre',
        display: 'Genre',
      },
    ];
    return <Table data={data} columns={columns} showHeaders />;
  }
}

export default Flixgrid;
