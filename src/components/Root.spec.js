import React from 'react';
import { shallow, mount } from 'enzyme';

import Root from './Root';
import Flixgrid from './Flixgrid';

describe('<Root />', () => {
  it('should render a wrapper element', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.find('.wrapper').length).toBe(1);
  });

  it('should render a Flixgrid component', () => {
    const wrapper = mount(<Root />);
    expect(wrapper.find(Flixgrid).length).toBe(1);
  });
});
