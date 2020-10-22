import React from 'react';
import ListItem from './ListItem';
import { StyleSheet, Text, View } from 'react-native';

const List = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>+{props.category}</Text>
            {
                props.items.map(item => {
                    return (<ListItem title={item} />);
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        padding: 15,
        margin: 10,
    },
    title: {
        fontWeight: 'bold',
    }
});

 export default List;
