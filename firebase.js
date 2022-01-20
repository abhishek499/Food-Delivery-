import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNkw_5q6Usdl__RgW_tJjReSd6scMaHT4",
  authDomain: "uber-eats-clone-8c4e3.firebaseapp.com",
  projectId: "uber-eats-clone-8c4e3",
  storageBucket: "uber-eats-clone-8c4e3.appspot.com",
  messagingSenderId: "933076541082",
  appId: "1:933076541082:web:c676b804e28593303b0923",
  measurementId: "G-1WMF613XTP",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
