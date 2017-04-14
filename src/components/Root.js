import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../assets/css/index.css';

import Flixgrid from './Flixgrid';

class Root extends Component {
  render() {
    return (
      <div className={styles['wrapper']}>
        <Flixgrid />
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node,
};

export default Root;
