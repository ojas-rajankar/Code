// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd1WWiZThHOZGfN8lBhdswt9uNZxvyFvA",
  authDomain: "theweb3world.firebaseapp.com",
  projectId: "theweb3world",
  storageBucket: "theweb3world.appspot.com",
  messagingSenderId: "507715245122",
  appId: "1:507715245122:web:152454b8582a2890ddc9db",
  measurementId: "G-TBFNLXKG31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);