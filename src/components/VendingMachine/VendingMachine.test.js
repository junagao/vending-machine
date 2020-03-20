import React from 'react';
import { shallow } from 'enzyme';
import { VendingMachine } from 'components';

describe('VendingMachine', () => {
  let wrapper;
  const machineCoinsAmountMock = 10;
  const productsMock = [
    {
      id: 'coke',
      name: 'coke',
      img: 'images/coke.png',
      price: 1,
      currentStock: 10,
    },
    {
      id: 'sprite',
      name: 'sprite',
      img: 'images/sprite.png',
      price: 1.25,
      currentStock: 5,
    },
    {
      id: 'fanta',
      name: 'fanta',
      img: 'images/fanta.png',
      price: 1.25,
      currentStock: 11,
    },
  ];
  const selectedProductNameMock = 'fanta';
  const selectedProductImgMock = 'images/fanta.png';

  beforeEach(() => {
    wrapper = shallow(
      <VendingMachine
        onDrop={jest.fn()}
        onDragOver={jest.fn()}
        onDragEnter={jest.fn()}
        onDragLeave={jest.fn()}
        isDropZone
        machineCoinsAmount={machineCoinsAmountMock}
        products={productsMock}
        onSelectProduct={jest.fn()}
        onCollectCoinRefund={jest.fn()}
        selectedProductName={selectedProductNameMock}
        selectedProductImg={selectedProductImgMock}
        onCollectProduct={jest.fn()}
        isCollected
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one VendingMachineContainer element', () => {
    expect(wrapper.find('VendingMachineContainer').length).toEqual(1);
  });

  it('should render one CoinSlot element', () => {
    expect(wrapper.find('CoinSlot').length).toEqual(1);
  });

  it('should render one DisplayDepositedAmount element', () => {
    expect(wrapper.find('DisplayDepositedAmount').length).toEqual(1);
  });

  it('should render one ProductList element', () => {
    expect(wrapper.find('ProductList').length).toEqual(1);
  });

  it('should render one CollectRefund element', () => {
    expect(wrapper.find('CollectRefund').length).toEqual(1);
  });

  it('should render one CollectProduct element', () => {
    expect(wrapper.find('CollectProduct').length).toEqual(1);
  });
});
