
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENTED':
            return state + 1
        case 'DECREMENTED':
            return state - 1
        default:
            return state
    }
}

export default counterReducer