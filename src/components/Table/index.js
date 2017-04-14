import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = props => {
  const { showHeaders, data, columns } = props || {};

  return (
    <table>
      {showHeaders && <TableHead />}
      {data.length
        ? <TableBody {...props} />
        : <tbody>
            <tr>
              <td>nothing</td>
            </tr>
          </tbody>}
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default Table;
