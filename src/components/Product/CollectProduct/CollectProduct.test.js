import React from 'react';
import { shallow } from 'enzyme';
import { CollectProduct } from 'components';

describe('CollectProduct', () => {
  let wrapper;
  const selectedProductNameMock = 'coke';
  const selectedProductImgMock = 'images/coke.png';
  const isCollectedMock = true;

  beforeEach(() => {
    wrapper = shallow(
      <CollectProduct
        selectedProductName={selectedProductNameMock}
        selectedProductImg={selectedProductImgMock}
        onCollectProduct={jest.fn()}
        isCollected={isCollectedMock}
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one div CollectProductContainer element', () => {
    expect(wrapper.find('CollectProductContainer').length).toEqual(1);
  });

  it('should not render ProductImg if isCollected is true', () => {
    expect(wrapper.find('ProductImg').length).toEqual(0);
  });

  it('should render one img ProductImg element with the correct `src, width, alt` props, if isCollected is false', () => {
    wrapper.setProps({ isCollected: false });
    expect(wrapper.find('ProductImg').length).toEqual(1);
    expect(wrapper.find('ProductImg').prop('src')).toEqual(`images/coke.png`);
    expect(wrapper.find('ProductImg').prop('width')).toEqual(`35`);
    expect(wrapper.find('ProductImg').prop('alt')).toEqual(`coke`);
  });
});
