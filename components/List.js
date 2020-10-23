import React, {Component} from 'react';
import ListItem from './ListItem';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class List extends Component {

    constructor(props) {
        super(props);
    }

    doThing() {
        alert('thing done');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Single')}>
                    <View>
                        <Text style={styles.title}>
                            {this.props.category === 'undefined' ? 'uncategorised' : this.props.category}
                        </Text>
                        {
                            this.props.items.map(item => {
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
                </TouchableOpacity>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: '1',
        backgroundColor: '#ddd',
        padding: 15,
        margin: 10,
        height: 'fit-content',
    },
    title: {
        fontWeight: 'bold',
    }
});
