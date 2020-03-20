import React from 'react';
import { shallow } from 'enzyme';
import { ProductItem } from 'components';

describe('ProductItem', () => {
  let wrapper;
  const idMock = 'product-a23d54';
  const nameMock = 'coca cola';
  const imgMock = 'http://vendingmachine.com/coke.png';
  const priceMock = 20;
  const currentStockMock = 7;
  const onSelectProductMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <ProductItem
        id={idMock}
        name={nameMock}
        img={imgMock}
        price={priceMock}
        currentStock={currentStockMock}
        onSelectProduct={onSelectProductMock}
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one li ProductItemLi element', () => {
    expect(wrapper.find('ProductItemLi').length).toEqual(1);
  });

  it('should render one ProductItemButton element of type `button`', () => {
    expect(wrapper.find('ProductItemButton').length).toEqual(1);
    expect(wrapper.find('ProductItemButton').prop('type')).toEqual('button');
  });

  it('should test click event on ProductItemButton button and pass `name, img, id` to onSelectProduct()', () => {
    wrapper.find('ProductItemButton').simulate('click');
    expect(onSelectProductMock.mock.calls[0][0]).toEqual('coca cola');
    expect(onSelectProductMock.mock.calls[0][1]).toEqual(
      'http://vendingmachine.com/coke.png',
    );
    expect(onSelectProductMock.mock.calls[0][2]).toEqual('product-a23d54');
    expect(onSelectProductMock.mock.calls.length).toEqual(1);
  });

  it('should render one img element with the correct `src, width, alt` props', () => {
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('img').prop('src')).toEqual(
      `http://vendingmachine.com/coke.png`,
    );
    expect(wrapper.find('img').prop('width')).toEqual(`46`);
    expect(wrapper.find('img').prop('alt')).toEqual(`coca cola`);
  });

  it('should render one ProductPrice p element with the price`', () => {
    expect(wrapper.find('ProductPrice').length).toEqual(1);
    expect(
      wrapper
        .find('ProductPrice')
        .children()
        .at(0)
        .text(),
    ).toEqual('20');
    expect(
      wrapper
        .find('ProductPrice')
        .children()
        .at(1)
        .text(),
    ).toEqual(' €');
  });

  it('should render one ProductQuantity element with the correct quantity amount. display `unit` if one or `units` is more than one', () => {
    expect(wrapper.find('ProductQuantity').length).toEqual(1);
    expect(
      wrapper
        .find('ProductQuantity')
        .children()
        .text(),
    ).toEqual(`${currentStockMock} units`);
    wrapper.setProps({ currentStock: 1 });
    expect(
      wrapper
        .find('ProductQuantity')
        .children()
        .text(),
    ).toEqual('1 unit');
  });
});
