import React from 'react';
import { shallow } from 'enzyme';

import { AdminControllers, RefillCoins, RefillStock } from 'components';

describe('AdminControllers', () => {
  let wrapper;

  const coinsMock = [
    { id: 'coin1', name: '2 euros', value: 2, quantity: 2 },
    { id: 'coin2', name: '1 euro', value: 1, quantity: 10 },
  ];
  const productsMock = [
    {
      id: 'coke',
      name: 'coke',
      img: 'image/coke.png',
      price: 1,
      currentStock: 10,
    },
    {
      id: 'sprite',
      name: 'sprite',
      img: 'image/sprite.png',
      price: 1.25,
      currentStock: 5,
    },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <AdminControllers
        coins={coinsMock}
        onRefillCoinsQuantity={jest.fn()}
        products={productsMock}
        onRefillProductStock={jest.fn()}
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one instance of <RefillCoins />', () => {
    expect(wrapper.find(RefillCoins).length).toEqual(1);
  });

  it('should render one instance of <RefillStock />', () => {
    expect(wrapper.find(RefillStock).length).toEqual(1);
  });
});
