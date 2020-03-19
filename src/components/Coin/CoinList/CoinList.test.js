import React from 'react';
import { shallow } from 'enzyme';
import { CoinList, CoinItem } from 'components';

describe('CoinList', () => {
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

  beforeEach(() => {
    wrapper = shallow(
      <CoinList
        coins={coinsMock}
        onDragStart={jest.fn()}
        onDragEnd={jest.fn()}
        onDragOver={jest.fn()}
        isDragging
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one unordered list CoinListUl element', () => {
    expect(wrapper.find('CoinListUl').length).toEqual(1);
  });

  it('should render two instances of <CoinItem />', () => {
    expect(wrapper.find(CoinItem).length).toEqual(2);
  });
});
