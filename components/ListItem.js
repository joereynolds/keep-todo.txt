import React from 'react';
import { View } from 'react-native';
import {CheckBox} from 'react-native-elements';


const ListItem = (props) => {
    return (
        <View>
            <CheckBox
                title={props.title}
                // checked={this.state.checked}
            />
        </View>
    )
}

export default ListItem;
