import 'react-native';
import React from 'react';
import SuppMann from '../Components/SuppMann.js';
jest.mock('mobx-react/native', () => require('mobx-react/custom'));

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const component = renderer.create(
    <SuppMann />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
