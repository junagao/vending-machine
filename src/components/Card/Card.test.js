import React from 'react';
import { shallow } from 'enzyme';
import { Card } from 'components';

describe('Card', () => {
  let wrapper;
  const titleMock = 'Machine';
  const subtitleMock = 'vending';
  const childrenMock = '<ChildComponent />';

  beforeEach(() => {
    wrapper = shallow(
      <Card title={titleMock} subtitle={subtitleMock} lastCard>
        {childrenMock}
      </Card>,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one CardContainer element with prop `lastCard`', () => {
    expect(wrapper.find('CardContainer').length).toEqual(1);
    expect(wrapper.find('CardContainer').prop('lastCard')).toBeTruthy();
  });

  it('should render one CardTitle element with the title and one CardSubtitle with the subtitle', () => {
    expect(wrapper.find('CardTitle').length).toEqual(1);
    expect(
      wrapper
        .find('CardTitle')
        .children()
        .at(0)
        .text(),
    ).toEqual(titleMock);
    expect(wrapper.find('CardSubtitle').length).toEqual(1);
    expect(
      wrapper
        .find('CardTitle')
        .children()
        .at(2)
        .text(),
    ).toEqual(subtitleMock);
  });
});
