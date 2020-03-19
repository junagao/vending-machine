import React from 'react';
import { shallow } from 'enzyme';
import { CollectRefund } from 'components';

describe('CollectRefund', () => {
  let wrapper;

  const machineCoinsAmountMock = 15;

  beforeEach(() => {
    wrapper = shallow(
      <CollectRefund
        onCollectCoinRefund={jest.fn()}
        machineCoinsAmount={machineCoinsAmountMock}
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one div CollectRefundContainer element', () => {
    expect(wrapper.find('CollectRefundContainer').length).toEqual(1);
  });

  it('should render one button CollectRefundButton element of type `button` and text `Collect Refund`', () => {
    expect(wrapper.find('CollectRefundButton').length).toEqual(1);
    expect(wrapper.find('CollectRefundButton').prop('type')).toEqual('button');
    expect(
      wrapper
        .find('CollectRefundButton')
        .children()
        .text(),
    ).toEqual('Collect Refund');
  });
});
