//Counter reducer
export const increment = () => {
    return {
        type: 'INCREMENTED'
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENTED'
    }
}

//Cart reducer
export const addToCart = (product) => {
    return {
        type: 'ADDED_TO_CART',
        payload: {
            product
        }
    }
}

export const removeFromCart = () => {
    return {
        type: 'REMOVED_FROM_CART'
    }
}

//User reducer
export const setUserInfo = (username, password, gender) => {
    return {
        type: 'USER_INFO_SET',
        payload: {
            uname: username,
            pword: password,
            sex: gender
        }
    }
}

export const deleteUserInfo = () => {
    return {
        type: 'USER_INFO_DELETED'
    }
}