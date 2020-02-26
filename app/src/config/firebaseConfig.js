import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAxHcEFIXGFjS_Z6uixYRXfTGt8jCmI8E8",
    authDomain: "parknspot-free.firebaseapp.com",
    databaseURL: "https://parknspot-free.firebaseio.com",
    projectId: "parknspot-free",
    storageBucket: "parknspot-free.appspot.com",
    messagingSenderId: "21428566542",
    appId: "1:21428566542:web:b08c2293d201999a53da5f",
    measurementId: "G-MV4RJRJNMD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
