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
                    'complete': [],
                }
            }
        };

        this.organiseTodos(`Add ability to delete an item +keeptodo
            Should be able to click into a list to start editing it +keeptodo
            flexbasis to 25% +keeptodo
            Integrate dropbox https://www.dropbox.com/lp/developers/reference/oauth-guide +keeptodo
            tests +keeptodo
            An icon for the app +keeptodo
            lists shouldn't show if they have no items +keeptodo
            https://www.digitalocean.com/community/tutorials/react-react-native-navigation +keeptodo
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
            x Strikethrough text if item is done +keeptodo
            x height shouldn't be same on all lists +keeptodo
            x Completed items should show up in their categories and a 'completed' category +keeptodo
            x A test on multiple categories +multiple +categories
            x Support multiple categories for a todo +keeptodo
            That film about that magazine +film`);
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
            let [item, ...categories] = task.split('+');
            item = item.trim();

            for (const category of categories) {
                if (typeof this.state.todos.categories[category] === 'undefined') {
                    this.state.todos.categories[category] = []
                }
            }

            let isChecked = false;
            if (item.startsWith('x ')) {
                isChecked = true;
                this.state.todos.categories['complete'].push({content: item, checked: isChecked});
            }

            for (const category of categories) {
                this.state.todos.categories[category].push({content: item, checked: isChecked});
            }
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
