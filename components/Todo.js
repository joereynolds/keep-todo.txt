import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import List from './List';
import Store from '../Store';

export default class Todo extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const categories = Object.keys(Store.getState().todos.categories);

        return (
            <View style={styles.container}>
              {categories.map(category => {
                  return (
                      <List 
                          category={category} 
                          key={category} 
                          items={Store.getState().todos.categories[category]}
                          navigation={this.props.navigation}
                      
                      />
                  )
              })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
