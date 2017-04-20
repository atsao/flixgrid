import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sorting: {
        dataKey: '',
        direction: '',
      },
      filtering: {
        dataKey: '',
        query: '',
      },
    };
  }

  _handleSort = (dataKey, direction) => {
    const { sorting } = this.state;
    let newSorting = JSON.parse(JSON.stringify(sorting));
    newSorting.dataKey = dataKey;
    newSorting.direction = direction;

    this.setState({
      sorting: newSorting,
    });
  };

  _handleFilter = (dataKey, query) => {
    const { filtering } = this.state;
    let newSorting = JSON.parse(JSON.stringify(filtering));
    newSorting.dataKey = dataKey;
    newSorting.query = query.toString();

    this.setState({
      filtering: newSorting,
    });
  };

  _sortData = data => {
    const { sorting: { dataKey, direction } } = this.state;

    if (dataKey && direction) {
      let high = 1;
      let low = -1;
      if (direction === 'desc') {
        high = -1;
        low = 1;
      }
      return data.sort((a, b) => a[dataKey] > b[dataKey] ? high : low);
    } else {
      return data;
    }
  };

  _filterData = data => {
    const { filtering: { dataKey, query } } = this.state;
    if (dataKey && query) {
      return data.filter(
        d =>
          d[dataKey].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    } else {
      return data;
    }
  };

  _renderTableHead = () => {
    const { sorting, filtering } = this.state;

    return (
      <TableHead
        sort={this._handleSort}
        sorting={sorting}
        filter={this._handleFilter}
        filtering={filtering}
        {...this.props}
      />
    );
  };

  render() {
    const { data, columns, showHeaders } = this.props;
    const sortedData = this._sortData(data);
    const filteredData = this._filterData(sortedData);

    return (
      <table className={styles['flixgrid-table']}>
        {showHeaders && this._renderTableHead()}
        <TableBody
          data={filteredData}
          columns={columns}
          showHeaders={showHeaders}
        />
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  columns: PropTypes.array,
  showHeaders: PropTypes.bool,
};

export default Table;
