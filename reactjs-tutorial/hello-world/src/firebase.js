import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvMNLkOIclorLTsVMNP3evyvwduTDzYVI",
    authDomain: "the-coding-corp.firebaseapp.com",
    projectId: "the-coding-corp",
    storageBucket: "the-coding-corp.appspot.com",
    messagingSenderId: "963207949800",
    appId: "1:963207949800:web:3852c2a8cd44ea7fbcc85d",
    measurementId: "G-64J3NJBDFK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
