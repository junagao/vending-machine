import React from 'react';
import { shallow } from 'enzyme';
import { Card } from 'components';

describe('Card', () => {
  let wrapper;
  const childrenMock = '<ChildComponent />';

  beforeEach(() => {
    wrapper = shallow(<Card>{childrenMock}</Card>);
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one CardContainer element', () => {
    expect(wrapper.find('CardContainer').length).toEqual(1);
  });

  it('should render the child component', () => {
    expect(
      wrapper
        .find('CardContainer')
        .children()
        .text(),
    ).toEqual('<ChildComponent />');
  });
});
