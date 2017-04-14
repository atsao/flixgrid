import React from 'react';
import renderer from 'react-test-renderer';

import Flixgrid from '../src/components/Flixgrid';

it('renders a Flixgrid component', () => {
  const tree = renderer.create(<Flixgrid />);
  expect(tree).toMatchSnapshot();
});
