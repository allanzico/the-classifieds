import {combineReducers} from "redux";
import authReducer from "./authReducer";
import classifiedReducer from "./classifiedReducer";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";


const rootReducer = combineReducers({
    auth: authReducer,
    classified: classifiedReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;