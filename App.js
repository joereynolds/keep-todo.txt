import React from 'react';
import 'react-native-gesture-handler';
import Multiple from './screens/Multiple';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider} from 'react-redux';
import List from './components/List';
import Store from './Store';

const Stack = createStackNavigator();

console.log(Store.getState());

export default function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Multiple" component={Multiple} />
                    <Stack.Screen name="Single" component={List} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
