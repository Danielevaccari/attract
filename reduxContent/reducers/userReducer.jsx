

const userReducer = (state = { username: '', password: '', gender: '' }, action) => {
    switch (action.type) {
        case 'USER_INFO_SET':
            return {
                username: action.payload.uname,
                password: action.payload.pword,
                gender: action.payload.sex
            }
        case 'USER_INFO_DELETED':
            return {}
        default:
            return state
    }
}

export default userReducer