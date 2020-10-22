import React from 'react';
import ListItem from './ListItem';
import { StyleSheet, Text, View } from 'react-native';

const List = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.category === 'undefined' ? 'uncategorised' : props.category}
            </Text>
            {
                props.items.map(item => {
                    if (item.content) {
                        return (
                            <ListItem 
                                title={item.content} 
                                key={item.content} 
                                checked={item.checked} 
                            />
                        );
                    }
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
        height: 'fit-content',
    },
    title: {
        fontWeight: 'bold',
    }
});

 export default List;
