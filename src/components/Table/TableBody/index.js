import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '../TableRow';

const TableBody = props => {
  const { data, columns } = props;

  return (
    <tbody>
      {data && data.length
        ? data.map((data, i) => (
            <TableRow key={i} columns={columns} data={data} />
          ))
        : <TableRow columns={columns} data="No data" _isEmpty />}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
};

export default TableBody;
