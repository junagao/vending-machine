import React from 'react';
import { shallow } from 'enzyme';
import { Header } from 'components';

describe('Header', () => {
  let wrapper;
  const textMock = 'Coca-cola Machine';

  beforeEach(() => {
    wrapper = shallow(<Header text={textMock} main />);
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one HeaderContainer element', () => {
    expect(wrapper.find('HeaderContainer').length).toEqual(1);
  });

  it('should render the header message', () => {
    expect(
      wrapper
        .find('HeaderContainer')
        .children()
        .text(),
    ).toEqual('Coca-cola Machine');
  });

  it('should render one HeaderContainer element with the correct `main` prop', () => {
    expect(wrapper.find('HeaderContainer').length).toEqual(1);
    expect(wrapper.find('HeaderContainer').prop('main')).toBeTruthy();
  });
});
