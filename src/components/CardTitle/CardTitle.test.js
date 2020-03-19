import React from 'react';
import { shallow } from 'enzyme';
import { CardTitle } from 'components';

describe('CardTitle', () => {
  let wrapper;
  const childrenMock = '<ChildComponent />';

  beforeEach(() => {
    wrapper = shallow(<CardTitle>{childrenMock}</CardTitle>);
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one Title element', () => {
    expect(wrapper.find('Title').length).toEqual(1);
  });

  it('should render the child component', () => {
    expect(
      wrapper
        .find('Title')
        .children()
        .text(),
    ).toEqual('<ChildComponent />');
  });
});
