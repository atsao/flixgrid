import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '../TableRow';

const TableBody = props => {
  const { data, columns } = props;

  return (
    <tbody>
      {data.map((data, i) => (
        <TableRow key={i} columns={columns} data={data} />
      ))}
    </tbody>
  );
};

TableBody.propTypes = {};

export default TableBody;
