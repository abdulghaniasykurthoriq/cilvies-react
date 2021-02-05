import {combineReducers} from "redux"
// import globalReducer from './globalReducer'
import homeReducer from './homeReducer'
import userReducer from './userReducer'

const reducer = combineReducers({homeReducer, userReducer})

export default reducer