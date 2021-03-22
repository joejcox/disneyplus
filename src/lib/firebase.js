import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD8Wx2ywXK4X8dt6V1oyrbzGT3EQUNOwo8",
  authDomain: "disney-plus-b0332.firebaseapp.com",
  databaseURL: "https://disney-plus-b0332-default-rtdb.firebaseio.com",
  projectId: "disney-plus-b0332",
  storageBucket: "disney-plus-b0332.appspot.com",
  messagingSenderId: "85675515126",
  appId: "1:85675515126:web:4c8508c3563aa404b860d7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
