import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBh405bznK4Brqj_fZOSqXycS0AVZ8_KsY",
    authDomain: "analisis-financiero-2260e.firebaseapp.com",
    projectId: "analisis-financiero-2260e",
    storageBucket: "analisis-financiero-2260e.appspot.com",
    messagingSenderId: "395854950630",
    appId: "1:395854950630:web:20a2fd8c99de3c921f8b27",
    measurementId: "G-NKEZWVB3CS"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Initialize Firebase
export { db };
