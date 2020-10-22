import React from 'react';
import { StyleSheet, View } from 'react-native';
import {CheckBox} from 'react-native-elements';

const ListItem = (props) => {
    return (
        <View>
            <CheckBox
                title={props.title}
                checked={props.checked}
                checkedIcon="check-square"
                checkedColor="gray"
                containerStyle={styles.container}
                textStyle={props.checked === true ? styles.text : ''}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 0,
        marginRight: 0,
    },
    text: {
        textDecorationLine: 'line-through'
    }
})

export default ListItem;
