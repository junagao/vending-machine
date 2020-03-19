import React from 'react';
import { shallow } from 'enzyme';
import { ErrorMessage } from 'components';

describe('ErrorMessage', () => {
  let wrapper;
  const errorMessageMock = 'ERROR';

  beforeEach(() => {
    wrapper = shallow(<ErrorMessage errorMessage={errorMessageMock} />);
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one ErrorContainer button element', () => {
    expect(wrapper.find('ErrorContainer').length).toEqual(1);
  });

  it('should render the error message', () => {
    expect(
      wrapper
        .find('ErrorContainer')
        .children()
        .text(),
    ).toEqual('ERROR');
  });
});
