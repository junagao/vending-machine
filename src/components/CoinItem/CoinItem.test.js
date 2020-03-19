import React from 'react';
import { shallow } from 'enzyme';
import { CoinItem } from 'components';

describe('CoinItem', () => {
  let wrapper;
  const idMock = 'id-232';
  const nameMock = '1 euro';
  const valueMock = 3;
  const userQuantityMock = 3;
  const isDraggingMock = true;

  beforeEach(() => {
    wrapper = shallow(
      <CoinItem
        id={idMock}
        name={nameMock}
        value={valueMock}
        userQuantity={userQuantityMock}
        onDragStart={jest.fn()}
        onDragEnd={jest.fn()}
        onDragOver={jest.fn()}
        isDragging={isDraggingMock}
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one CoinItemLi element', () => {
    expect(wrapper.find('CoinItemLi').length).toEqual(1);
  });

  it('should render one CoinItemValue element with the coin name', () => {
    expect(wrapper.find('CoinItemValue').length).toEqual(1);
    expect(
      wrapper
        .find('CoinItemValue')
        .children()
        .text(),
    ).toEqual('1 euro');
  });

  it('should render one CoinItemQuantity element with the correct quantity amount. display `unit` if one or `units` is more than one', () => {
    expect(wrapper.find('CoinItemQuantity').length).toEqual(1);
    expect(
      wrapper
        .find('CoinItemQuantity')
        .children()
        .text(),
    ).toEqual('3 units');
    wrapper.setProps({ userQuantity: 1 });
    expect(
      wrapper
        .find('CoinItemQuantity')
        .children()
        .text(),
    ).toEqual('1 unit');
  });
});
