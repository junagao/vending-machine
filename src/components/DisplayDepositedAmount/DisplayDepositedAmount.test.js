import React from 'react';
import { shallow } from 'enzyme';
import { DisplayDepositedAmount } from 'components';

describe('DisplayDepositedAmount', () => {
  let wrapper;

  const machineCoinsAmountMock = 15;

  beforeEach(() => {
    wrapper = shallow(
      <DisplayDepositedAmount machineCoinsAmount={machineCoinsAmountMock} />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one p DisplayAmount element` with machineCoinsAmount `15 €`', () => {
    expect(wrapper.find('DisplayAmount').length).toEqual(1);
    expect(
      wrapper
        .find('DisplayAmount')
        .children()
        .at(0)
        .text(),
    ).toContain(`15`);
    expect(
      wrapper
        .find('DisplayAmount')
        .children()
        .at(1)
        .text(),
    ).toContain(`€`);
  });
});
