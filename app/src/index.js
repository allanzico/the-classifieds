import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/NavBarStyle.css';
import './css/ContentStyle.css';
import './css/AuthStyle.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import {Provider} from "react-redux";
import  thunk from 'redux-thunk';
import {reduxFirestore, getFirestore, createFirestoreInstance} from "redux-firestore";
import {ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase";
import  firebaseConfig from './config/firebaseConfig';
import * as firebase from "firebase";

const rrfConfig = { userProfile: 'users' }

const  store = createStore(rootReducer, compose(applyMiddleware(
    thunk.withExtraArgument({getFirebase, getFirestore})
    ), reduxFirestore(firebaseConfig)
    )

);
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App /></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
