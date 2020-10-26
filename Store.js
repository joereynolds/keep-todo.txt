import listItemReducer from './reducers/ListItem';
import { createStore } from 'redux';

function populateInitialState(todos) {
    let state = {
        todos: {
            categories: {
                'complete': [],
            }
        }
    };

    todos = todos.split('\n');
    for (const task of todos) {
        let [item, ...categories] = task.split('+');
        item = item.trim();

        for (const category of categories) {
            if (typeof state.todos.categories[category] === 'undefined') {
                state.todos.categories[category] = []
            }
        }

        let isChecked = false;
        if (item.startsWith('x ')) {
            isChecked = true;
            state.todos.categories['complete'].push({ content: item, checked: isChecked });
        }

        for (const category of categories) {
            state.todos.categories[category].push({ content: item, checked: isChecked });
        }
    }

    return state;
}

const state = populateInitialState(`Add ability to delete an item +keeptodo
            Should be able to click into a list to start editing it +keeptodo
            Completed items should be at the bottom of the list +keeptodo
            x Add "screens" directory +keeptodo
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

// TODO - use combineReducers when we have more reducers
const Store = createStore(listItemReducer, state);
export default Store;
