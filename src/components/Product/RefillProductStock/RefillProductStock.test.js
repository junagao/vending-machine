import React from 'react';
import { shallow } from 'enzyme';
import { RefillProductStock } from 'components';

describe('RefillProductStock', () => {
  let wrapper;
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
    {
      id: 'fanta',
      name: 'fanta',
      img: 'image/fanta.png',
      price: 1.25,
      currentStock: 11,
    },
  ];

  const onRefillProductStockMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <RefillProductStock
        products={productsMock}
        onRefillProductStock={onRefillProductStockMock}
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one Card element with prop `title` and `subtitle`', () => {
    const titleMock = 'Refill machine products';
    expect(wrapper.find('Card').length).toEqual(1);
    expect(wrapper.find('Card').prop('title')).toEqual(titleMock);
    expect(wrapper.find('Card').prop('subtitle')).toEqual(`(+5)`);
  });

  it('should render one RefillList element', () => {
    expect(wrapper.find('RefillList').length).toEqual(1);
  });

  it('should render three RefillItem element', () => {
    expect(wrapper.find('RefillItem').length).toEqual(3);
  });

  it('should render three Button element with text prop containing coin name and prop handleClick', () => {
    expect(wrapper.find('Button').length).toEqual(3);
    expect(
      wrapper
        .find('Button')
        .at(0)
        .prop('text'),
    ).toEqual(`coke`);
  });
});
