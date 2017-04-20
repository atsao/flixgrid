import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';

import styles from './index.css';

class TableData extends Component {
  _renderHeader = () => {
    const {
      display,
      dataKey,
      sort,
      sorting,
      filter,
    } = this.props;
    const content = display || '';

    return (
      <td>
        {content}&nbsp;
        <Button
          onClick={() => sort(dataKey, 'asc')}
          disabled={sorting.dataKey === dataKey && sorting.direction === 'asc'}
          className={styles['sort-ascending']}
          ghost
        >
          ▲
        </Button>&nbsp;
        <Button
          onClick={() => sort(dataKey, 'desc')}
          disabled={sorting.dataKey === dataKey && sorting.direction === 'desc'}
          className={styles['sort-descending']}
          ghost
        >
          ▼
        </Button>&nbsp;
        <input
          type="text"
          onChange={e => filter(dataKey, e.target.value)}
          className={styles['filter']}
          placeholder={display && `Filter on ${display.toLowerCase()}`}
        />
      </td>
    );
  };

  _renderEmpty = () => {
    const { data, columns, render } = this.props;
    const content = data || '';

    return (
      <td
        colSpan={columns && columns.length}
        className={styles['flixgrid-td-empty']}
      >
        {render ? render(content) : content}
      </td>
    );
  };

  render() {
    const { data, dataKey, render, _isHeader, _isEmpty } = this.props;
    const content = data[dataKey] || data || '';

    if (_isHeader) {
      return this._renderHeader();
    }

    if (_isEmpty) {
      return this._renderEmpty();
    }

    return (
      <td className={styles['flixgrid-td']}>
        {render ? render(content) : content}
      </td>
    );
  }
}

TableData.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  columns: PropTypes.array,
  _isHeader: PropTypes.bool,
  _isEmpty: PropTypes.bool,
  display: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  render: PropTypes.func,
  dataKey: PropTypes.string,
  sort: PropTypes.func,
  sorting: PropTypes.object,
  filter: PropTypes.func,
};

export default TableData;
