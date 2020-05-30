import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/NavBarStyle.css';
import './css/ContentStyle.css';
import './css/AuthStyle.css';
import  './css/article-page.css';
import  './css/main.css';
import  './css/navbar.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import {Provider, useSelector} from "react-redux";
import  thunk from 'redux-thunk';
import {reduxFirestore, getFirestore, createFirestoreInstance} from "redux-firestore";
import {ReactReduxFirebaseProvider, getFirebase, isLoaded} from "react-redux-firebase";
import  firebaseConfig from './config/firebaseConfig';
import * as firebase from "firebase";
import SplashScreen from "./components/layout/SplashScreen";

const rrfConfig = {  userProfile: 'users', useFirestoreForProfile: true}

function AuthIsLoaded ({children}) {
const  auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <SplashScreen/>;
    return children
}

const  store = createStore(rootReducer, compose(applyMiddleware(
    thunk.withExtraArgument({getFirebase,getFirestore})
    ), reduxFirestore(firebaseConfig)
    )

);
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><AuthIsLoaded><App /></AuthIsLoaded></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
