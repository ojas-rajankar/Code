import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApRWIvFesGCWXEjeTmQRE8QpaO-hWwxeE",
  authDomain: "apf-dashboard.firebaseapp.com",
  projectId: "apf-dashboard",
  storageBucket: "apf-dashboard.appspot.com",
  messagingSenderId: "819542230726",
  appId: "1:819542230726:web:3bca196c9ca68e7cd939c7",
  measurementId: "G-5P9XWT1GS9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
