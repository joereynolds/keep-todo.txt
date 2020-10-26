import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../../components/ListItem';

describe('<ListItem />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ListItem title='this-is-my-title'/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
