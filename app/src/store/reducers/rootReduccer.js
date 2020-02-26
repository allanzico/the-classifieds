import {combineReducers} from "redux";
import authReducer from "./authReducer";
import classifiedReducer from "./classifiedReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    classified: classifiedReducer
})

export default rootReducer;