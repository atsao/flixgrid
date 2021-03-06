import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '../TableRow';

import styles from './index.css';

const TableHead = props => {
  const { data, columns, sort, sorting, filter, filtering } = props;

  return (
    <thead>
      <TableRow
        _isHeader
        data={data}
        columns={columns}
        sort={sort}
        sorting={sorting}
        filter={filter}
        filtering={filtering}
        className={styles['flixgrid-thead']}
      />
    </thead>
  );
};

TableHead.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  columns: PropTypes.array,
  sort: PropTypes.func,
  sorting: PropTypes.object,
  filter: PropTypes.func,
  filtering: PropTypes.object,
};

export default TableHead;
