import React from 'react';
import { shallow } from 'enzyme';
import { CoinSlot } from 'components';

describe('CoinSlot', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CoinSlot
        onDrop={jest.fn()}
        onDragOver={jest.fn()}
        onDragEnter={jest.fn()}
        onDragLeave={jest.fn()}
        isDropZone
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one CoinSlotContainer element', () => {
    expect(wrapper.find('CoinSlotContainer').length).toEqual(1);
  });

  it('should render one InsertCoinInstruction element with the correct `Drag coin here >` text', () => {
    expect(wrapper.find('InsertCoinInstruction').length).toEqual(1);
    expect(
      wrapper
        .find('InsertCoinInstruction')
        .children()
        .text(),
    ).toEqual(`Drag coin here >`);
  });

  it('should render one CoinSlotDispenser element', () => {
    expect(wrapper.find('CoinSlotDispenser').length).toEqual(1);
  });
});
