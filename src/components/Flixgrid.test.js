import React from 'react';
import renderer from 'react-test-renderer';

import Flixgrid from './Flixgrid';

it('renders a Flixgrid component', () => {
  const tree = renderer.create(<Flixgrid />);
  expect(tree).toMatchSnapshot();
});
