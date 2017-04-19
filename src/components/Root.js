import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../assets/css/index.css';
import data from '../data.json';

import Flixgrid from './Flixgrid';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
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
    return (
      <div className={styles['wrapper']}>
        <Flixgrid data={data} columns={columns} showHeaders />
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node,
};

export default Root;
