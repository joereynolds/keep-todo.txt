import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import List from './List';

export default class Todo extends Component {
    constructor(props){
        super(props);

        this.state = {
            file: props.file,
            todos: {
                categories: {

                }
            }
        };

        this.organiseTodos(`
            OKRs +read
            On Writing (Stephen King) +book
            Oragnise bike fix +todo
            Paintballing +fun
            Permanent Record +book
            Pikhal: A Chemical Love Story +book
            Rent a Treehouse +fun
            Rome +tv
            Safari park near Liverpool +fun
            Self-similar Melodies +book
            Sell phone +todo
            Sense8 +tv
            Shoe Dog +book
            Shortcircuit 1 2 3 - Beattie told me to +film
            Snowboarding/Skiing +fun
            Sort car camera +todo
            Spotlight +film
            Spycatcher +book
            Stoner (John Williams) +book
            Subscribe to computer music journal (see if library has a subscription) +todo
            Sunshine +film
            Tab out etude 3 from oboe +todo
            That film about that magazine +film
        `);
    }

    render() {
        const categories = Object.keys(this.state.todos.categories);
        return (
            <View style={styles.container}>
              {categories.map(category => {
                  return (<List category={category} key={category} items={this.state.todos.categories[category]}/>)
              })}
            </View>
        );
    }

    // For now reads from a file, will need to change this when/if it's integrated
    // with dropbox
    //
    // This populates the state with our tasks put into their categories
    // TODO - should this populate props instead of state? Probably not
    organiseTodos(todos) {

        todos = todos.split('\n');
        for (const task of todos) {
            // TODO - Thought we could unpack a variable here instead of doing [0] and [1].
            // Investigate.
            let todo = task.split('+');
            let item = todo[0].trim();
            let category = todo[1];

            if (typeof this.state.todos.categories[category] === 'undefined') {
                this.state.todos.categories[category] = []
            }

            this.state.todos.categories[category].push(item);
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
});
