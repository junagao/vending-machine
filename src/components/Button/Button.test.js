import React from 'react';
import { shallow } from 'enzyme';

import { Button } from 'components';

describe('Button', () => {
  let wrapper;

  const textMock = 'click here';
  const handleClickMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Button text={textMock} handleClick={handleClickMock} />);
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one button element of type `button`', () => {
    expect(wrapper.find('ButtonContainer').length).toEqual(1);
    expect(wrapper.find('ButtonContainer').prop('type')).toEqual('button');
  });

  it('should render the button text', () => {
    expect(
      wrapper
        .find('ButtonContainer')
        .children()
        .text(),
    ).toEqual('click here');
  });

  it('should test click event on button and call handleClick one time', () => {
    wrapper.find('ButtonContainer').simulate('click');
    expect(handleClickMock.mock.calls.length).toEqual(1);
  });
});
