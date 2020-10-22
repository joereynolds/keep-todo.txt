import React from 'react';
import { View } from 'react-native';
import Todo from './components/Todo';
import ViewBar from './components/ViewBar';

export default function App() {
  return (
    <View>
      <ViewBar />
      <Todo file="./todo.txt"/>
    </View>
  );
}
