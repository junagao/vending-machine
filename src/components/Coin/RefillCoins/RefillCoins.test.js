import React from 'react';
import { shallow } from 'enzyme';
import { RefillCoins } from 'components';

describe('RefillCoins', () => {
  let wrapper;
  const coinsMock = [
    {
      id: 'coin1',
      name: '2 euros',
      value: 2,
      userQuantity: 10,
      machineQuantity: 2,
    },
    {
      id: 'coin2',
      name: '1 euro',
      value: 1,
      userQuantity: 5,
      machineQuantity: 3,
    },
  ];

  const onRefillCoinsQuantityMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <RefillCoins
        coins={coinsMock}
        onRefillCoinsQuantity={onRefillCoinsQuantityMock}
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one Card element with prop `title` and `subtitle`', () => {
    expect(wrapper.find('Card').length).toEqual(1);
    expect(wrapper.find('Card').prop('title')).toEqual(
      `Refill machine coins for change`,
    );
    expect(wrapper.find('Card').prop('subtitle')).toEqual(`(+5)`);
  });

  it('should render one RefillCoinsList element', () => {
    expect(wrapper.find('RefillCoinsList').length).toEqual(1);
  });

  it('should render two RefillCoinsItem element', () => {
    expect(wrapper.find('RefillCoinsItem').length).toEqual(2);
  });

  it('should render two Button element with text prop containing coin name and prop handleClick', () => {
    expect(wrapper.find('Button').length).toEqual(2);
    expect(
      wrapper
        .find('Button')
        .at(0)
        .prop('text'),
    ).toEqual(`2 euros`);
  });
});
