import { combineReducers } from "redux";
import userReducer from "./reducer/reducer";



const rootStore = combineReducers({
    users: userReducer
})

export default rootStore