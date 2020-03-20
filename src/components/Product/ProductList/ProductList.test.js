import React from 'react';
import { shallow } from 'enzyme';
import { ProductList, ProductItem } from 'components';

describe('ProductList', () => {
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

  const onSelectProductMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <ProductList
        products={productsMock}
        onSelectProduct={onSelectProductMock}
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one unordered list ProductListUl element', () => {
    expect(wrapper.find('ProductListUl').length).toEqual(1);
  });

  it('should render 3 instances of <ProductItem />', () => {
    expect(wrapper.find(ProductItem).length).toEqual(3);
  });
});
