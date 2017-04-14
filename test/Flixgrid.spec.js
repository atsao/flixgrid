import React from 'react';
import { shallow, mount } from 'enzyme';

import Flixgrid from '../src/components/Flixgrid';
import Table from '../src/components/Table';

jest.useFakeTimers();

describe('<Flixgrid />', () => {
  it('should render a Table component', () => {
    const wrapper = shallow(<Flixgrid />);
    expect(wrapper.find(Table).length).toBe(1);
  });

  it('should call fake API for data', () => {
    const wrapper = mount(<Flixgrid />);
    expect(wrapper.state('data').length).toBe(0);
    jest.runTimersToTime(1500);
    expect(wrapper.state('data').length).toBeGreaterThan(0);
  });
});
