import React from 'react';
import { View } from 'react-native';
import Todo from './components/Todo';

export default function App() {
  return (
    <View>
      <Todo file="./todo.txt"/>
    </View>
  );
}
