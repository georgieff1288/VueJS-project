import firebase from 'firebase/app';
import 'firebase/firestore';
import "@firebase/auth";

const environment = {
    apiKey: "AIzaSyD4mNIzdoCZfSsBWVfxcEyWWAcuBtUgXUQ",
    authDomain: "vuejs-project-d4d6c.firebaseapp.com",
    databaseURL: "https://vuejs-project-d4d6c.firebaseio.com",
    projectId: "vuejs-project-d4d6c",
    storageBucket: "vuejs-project-d4d6c.appspot.com",
    messagingSenderId: "851390616616",
    appId: "1:851390616616:web:e11a409b7db08c8b76d11d"
};

export const db = firebase.initializeApp(environment);
export const firestore = db.firestore();
export const auth = firebase.auth();