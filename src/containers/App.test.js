import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from 'store';

import App from 'containers/App';

import {
  Header,
  VendingMachine,
  Wallet,
  AdminControllers,
  ErrorMessage,
} from 'components';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one AppContainer element', () => {
    expect(wrapper.find('AppContainer').length).toEqual(1);
  });

  it('should render one Error component', () => {
    expect(wrapper.find(ErrorMessage).length).toEqual(1);
  });

  it('should render three Header components', () => {
    expect(wrapper.find(Header).length).toEqual(3);
  });

  it('should render one Main element', () => {
    expect(wrapper.find('Main').length).toEqual(1);
  });

  it('should render one VendingMachine component', () => {
    expect(wrapper.find(VendingMachine).length).toEqual(1);
  });

  it('should render one UserControls element', () => {
    expect(wrapper.find('UserControls').length).toEqual(1);
  });

  it('should render one Wallet component', () => {
    expect(wrapper.find(Wallet).length).toEqual(1);
  });

  it('should render one AdminControllers component', () => {
    expect(wrapper.find(AdminControllers).length).toEqual(1);
  });
});
