import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableData extends Component {
  _renderHeader = () => {
    const {
      display,
      dataKey,
      render,
      sort,
      sorting,
      filter,
      filtering,
    } = this.props;
    const content = display || '';

    return (
      <td>
        {render ? render(content) : content}
        <button
          onClick={() => sort(dataKey, 'asc')}
          disabled={sorting.dataKey === dataKey && sorting.direction === 'asc'}
          className="sort-ascending"
        >
          Asc
        </button>
        <button
          onClick={() => sort(dataKey, 'desc')}
          disabled={sorting.dataKey === dataKey && sorting.direction === 'desc'}
          className="sort-descending"
        >
          Desc
        </button>
        <input
          type="text"
          onChange={e => filter(dataKey, e.target.value)}
          className="filter"
        />
      </td>
    );
  };

  _renderEmpty = () => {
    const { data, columns, render } = this.props;
    const content = data || '';

    return (
      <td colSpan={columns.length}>
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
      <td>
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
};

export default TableData;
