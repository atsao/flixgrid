import React from 'react';
import PropTypes from 'prop-types';

import TableData from '../TableData';

const TableRow = props => {
  const { columns, data } = props;

  return (
    <tr>
      {columns.map((child, i) => <TableData key={i} data={data} {...child} />)}
    </tr>
  );
};

TableRow.propTypes = {
  columns: PropTypes.array,
};

export default TableRow;
