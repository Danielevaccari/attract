import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import counterReducer from "./counterReducer"

const rootReducer = combineReducers({
    cartReducer, counterReducer
})

export default rootReducer