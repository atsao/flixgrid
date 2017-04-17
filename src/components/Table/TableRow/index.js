import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableData from '../TableData';

class TableRow extends Component {
  _renderCells = () => {
    const {
      data,
      columns,
      _isHeader,
      _isEmpty,
      sort,
      sorting,
      filter,
      filtering,
    } = this.props;

    return columns.map((child, i) => {
      const { dataKey, display, render } = child;

      return (
        <TableData
          key={i}
          columns={columns}
          data={data}
          _isHeader={_isHeader}
          _isEmpty={_isEmpty}
          sort={sort}
          sorting={sorting}
          filter={filter}
          filtering={filtering}
          {...child}
        />
      );
    });
  };

  render() {
    const { data, columns, _isHeader, _isEmpty } = this.props;
    return (
      <tr>
        {_isEmpty
          ? <TableData {...this.props} _isEmpty />
          : this._renderCells()}
      </tr>
    );
  }
}

TableRow.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  columns: PropTypes.array,
  _isHeader: PropTypes.bool,
  _isEmpty: PropTypes.bool,
};

export default TableRow;
