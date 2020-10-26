export default function listItemReducer(state, action) {
    if (action.type === 'todo/item/complete') {
        return {
            ...state
            // TODO - 'complete' the selected item
        }
    }

    return state;
}
