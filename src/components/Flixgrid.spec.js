import React from 'react';
import { shallow } from 'enzyme';

import Flixgrid from './Flixgrid';
import Table from './Table';

jest.useFakeTimers();

describe('<Flixgrid />', () => {
  it('should render a Table component', () => {
    const wrapper = shallow(<Flixgrid />);
    expect(wrapper.find(Table).length).toBe(1);
  });
});
