import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyATHzfze7RHlwdk65rvpGKBFxcR37AQwTs",
    authDomain: "react-meetings-app.firebaseapp.com",
    databaseURL: "https://react-meetings-app.firebaseio.com",
    projectId: "react-meetings-app",
    storageBucket: "react-meetings-app.appspot.com",
    messagingSenderId: "470188545267",
    appId: "1:470188545267:web:616c81dcd9f95127"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth();

export default firebase