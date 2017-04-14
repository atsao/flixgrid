import React from 'react';
import PropTypes from 'prop-types';

const TableData = props => {
  const { data, dataKey, render } = props;
  return (
    <td>
      {render ? render(data[dataKey] || '') : data[dataKey] || ''}
    </td>
  );
};

TableData.propTypes = {
  children: PropTypes.any,
};

export default TableData;
