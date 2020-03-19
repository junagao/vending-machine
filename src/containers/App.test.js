import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from 'store';

import App from 'containers/App';

import {
  Header,
  VendingMachine,
  Wallet,
  RefillProductStock,
  RefillCoins,
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

  it('should render one instance of Error component', () => {
    expect(wrapper.find(ErrorMessage).length).toEqual(1);
  });

  it('should render three instances of Header component', () => {
    expect(wrapper.find(Header).length).toEqual(2);
  });

  it('should render one Main element', () => {
    expect(wrapper.find('Main').length).toEqual(1);
  });

  it('should render one instance of VendingMachine component', () => {
    expect(wrapper.find(VendingMachine).length).toEqual(1);
  });

  it('should render one Controls element', () => {
    expect(wrapper.find('Controls').length).toEqual(1);
  });

  it('should render one instance of Wallet component', () => {
    expect(wrapper.find(Wallet).length).toEqual(1);
  });

  it('should render one MachineAdmin element', () => {
    expect(wrapper.find('MachineAdmin').length).toEqual(1);
  });

  it('should render one instance of RefillProductStock component', () => {
    expect(wrapper.find(RefillProductStock).length).toEqual(1);
  });

  it('should render one instance of RefillCoins component', () => {
    expect(wrapper.find(RefillCoins).length).toEqual(1);
  });
});
