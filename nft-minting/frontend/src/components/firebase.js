
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2bG-Ei_HM3A0dluzkYSx6TotgDcUFTtw",
  authDomain: "convert-into-nft.firebaseapp.com",
  projectId: "convert-into-nft",
  storageBucket: "convert-into-nft.appspot.com",
  messagingSenderId: "124111511185",
  appId: "1:124111511185:web:7b20814548345035bee930",
  measurementId: "G-K33W9R87BX"
};


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export  {
  storage, firebase as default
}

