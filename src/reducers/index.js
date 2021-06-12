import {combineReducers} from "redux" // To combine reducers
import menuReducer from "./menu"

// Add reducer to the constant allReducers
const allReducers = combineReducers({
    menuCollapsed: menuReducer
})

export default allReducers