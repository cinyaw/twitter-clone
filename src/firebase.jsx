import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBwTfAsxbcDSof2K7gIxA2yGrVu6YWR70",
    authDomain: "twitter-clone-81424.firebaseapp.com",
    projectId: "twitter-clone-81424",
    storageBucket: "twitter-clone-81424.appspot.com",
    messagingSenderId: "354619449930",
    appId: "1:354619449930:web:047c5a3c0a3d9198f0fcb3",
    measurementId: "G-YNSPS4NSZ4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;