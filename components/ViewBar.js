import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ViewBar = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Project</Text>
            <Text style={styles.title}>Context</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: '#ddd',
        padding: 15,
        margin: 10,
    },
    title: {
        fontWeight: 'bold',
        flex: 1
    }
});


export default ViewBar;
