import React from 'react';
import { shallow, mount } from 'enzyme';

import Table from '../Table';
import TableHead from '../Table/TableHead';
import TableBody from '../Table/TableBody';

describe('<Table />', () => {
  let props;

  beforeEach(() => {
    props = {
      data: [
        {
          item: 'Banana',
          price: 1.00,
        },
        {
          item: 'Apple',
          price: 2.00,
        },
        {
          item: 'Grape',
          price: 3.00,
        },
        {
          item: 'Grapefruit',
          price: 2.50,
        },
      ],
      columns: [
        {
          dataKey: 'item',
          display: 'Item',
        },
        {
          dataKey: 'price',
          price: 'Price',
        },
      ],
    };
  });

  it('should render a table element', () => {
    const wrapper = shallow(<Table {...props} />);
    expect(wrapper.find('table').length).toBe(1);
  });

  it('should render a TableHead component when showHeaders is enabled', () => {
    let wrapper = shallow(<Table {...props} />);
    expect(wrapper.find(TableHead).length).toBe(0);
    props.showHeaders = true;
    wrapper = shallow(<Table {...props} />);
    expect(wrapper.find(TableHead).length).toBe(1);
  });

  it('should render a TableBody component', () => {
    const wrapper = shallow(<Table {...props} />);
    expect(wrapper.find(TableBody).length).toBe(1);
  });

  it('should not display sort or filter options when showHeaders is disabled', () => {
    const wrapper = shallow(<Table {...props} />);
    expect(wrapper.find('.sort-ascending').length).toBe(0);
    expect(wrapper.find('.sort-descending').length).toBe(0);
    expect(wrapper.find('.filter').length).toBe(0);
  });

  it('should sort data in ascending order and disable the button', () => {
    props.showHeaders = true;

    const wrapper = mount(<Table {...props} />);
    expect(wrapper.find('.sort-ascending').length).toBeGreaterThan(0);
    wrapper.find('.sort-ascending').first().simulate('click');
    expect(wrapper.find('tbody td').first().text()).toBe('Apple');
    expect(
      wrapper.find('.sort-ascending').first().prop('disabled')
    ).toBeTruthy();
  });

  it('should sort data in descending order and disable the button', () => {
    props.showHeaders = true;

    const wrapper = mount(<Table {...props} />);
    expect(wrapper.find('.sort-descending').length).toBeGreaterThan(0);
    wrapper.find('.sort-descending').first().simulate('click');
    expect(wrapper.find('tbody td').first().text()).toBe('Grapefruit');
    expect(
      wrapper.find('.sort-descending').first().prop('disabled')
    ).toBeTruthy();
  });

  it('should filter data by query', () => {
    props.showHeaders = true;
    const wrapper = mount(<Table {...props} />);
    expect(wrapper.find('.filter').length).toBeGreaterThan(0);
    wrapper
      .find('.filter')
      .first()
      .simulate('change', { target: { value: 'Grape' } });
    expect(wrapper.find('tbody').children().length).toBe(2);
  });

  it('should filter sorted data by query', () => {
    props.showHeaders = true;
    const wrapper = mount(<Table {...props} />);
    wrapper.find('.sort-ascending').first().simulate('click');
    expect(wrapper.find('.filter').length).toBeGreaterThan(0);
    expect(wrapper.find('tbody td').first().text()).toBe('Apple');
    wrapper
      .find('.filter')
      .first()
      .simulate('change', { target: { value: 'Grape' } });
    expect(wrapper.find('tbody').children().length).toBe(2);
    expect(wrapper.find('tbody td').first().text()).toBe('Grape');
    wrapper.find('.sort-descending').first().simulate('click');
    expect(wrapper.find('tbody td').first().text()).toBe('Grapefruit');
  });
});
