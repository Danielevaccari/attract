import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import counterReducer from "./counterReducer"
import userReducer from './userReducer'

const rootReducer = combineReducers({
    cartReducer, counterReducer, userReducer
})

export default rootReducer