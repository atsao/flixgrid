import React from 'react';
import renderer from 'react-test-renderer';

import Root from '../src/components/Root';

it('renders a Root component', () => {
  const tree = renderer.create(<Root />);
  expect(tree).toMatchSnapshot();
});
