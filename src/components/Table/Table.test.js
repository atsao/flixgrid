import React from 'react';
import renderer from 'react-test-renderer';

import Table from '../Table';
import TableHead from '../Table/TableHead';
import TableBody from '../Table/TableBody';
import TableRow from '../Table/TableRow';
import TableData from '../Table/TableData';

const props = {
  data: [],
  columns: [],
};

it('renders a Table component', () => {
  const tree = renderer.create(<Table {...props} />);
  expect(tree).toMatchSnapshot();
});

it('renders a TableHead component', () => {
  const tree = renderer.create(<TableHead {...props} />);
  expect(tree).toMatchSnapshot();
});

it('renders a TableBody component', () => {
  const tree = renderer.create(<TableBody {...props} />);
  expect(tree).toMatchSnapshot();
});

it('renders a TableRow component', () => {
  const tree = renderer.create(<TableRow {...props} />);
  expect(tree).toMatchSnapshot();
});

it('renders a TableData component', () => {
  const tree = renderer.create(<TableData {...props} />);
  expect(tree).toMatchSnapshot();
});
