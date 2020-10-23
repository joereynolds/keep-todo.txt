import React from 'react';
import 'react-native-gesture-handler';
import Multiple from './screens/Multiple';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './components/List';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Multiple" component={Multiple}/>
          <Stack.Screen name="Single" component={List}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
