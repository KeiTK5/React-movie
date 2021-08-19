import { combineReducers } from "redux";
import statusReducer from "./statusReducer";

const root = combineReducers({
    status: statusReducer
})

export default root
