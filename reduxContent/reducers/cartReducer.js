var lastId = 0;

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADDED_TO_CART':
            return [...state, {
                id: lastId++, content: action.payload
            }]
        case 'REMOVED_FROM_CART':
            return state.filter(item => item.id !== action.payload.ID)
        default:
            return state
    }
}

export default cartReducer
