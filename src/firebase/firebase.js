import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDVjOQ4b8Q--JfipwCGD5zG-cvjOuJh9J4",
    authDomain: "clone-build-3.firebaseapp.com",
    projectId: "clone-build-3",
    storageBucket: "clone-build-3.appspot.com",
    messagingSenderId: "344721167125",
    appId: "1:344721167125:web:8e934aeb434889e52a8f1c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore(); //Db cloudfirestore

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}


