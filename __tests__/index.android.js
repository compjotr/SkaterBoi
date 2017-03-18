jest.mock('mobx-react/native', () => require('mobx-react/custom'));
jest.dontMock('../Components/SuppMann.js');

import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import SuppMan from '../Components/SuppMann.js';

describe('Index Android', function(){
  beforeEach(function(){
  });
  it('renders correctly', () => {
    const component = renderer.create(
      <SuppMan />
    );
    const wrapper = shallow(<SuppMan />);
    expect(wrapper.find('Button').length).toBe(1);

    expect(wrapper.find('Button').prop('children')).toBe('Halla');

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
