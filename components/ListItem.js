import React from 'react';
import { Text, View } from 'react-native';
import {CheckBox} from 'react-native-elements';


export default function ListItem() {
    return (
        <View>
            <CheckBox
                title="Clean car +todo"
            />
        </View>
    )
}
