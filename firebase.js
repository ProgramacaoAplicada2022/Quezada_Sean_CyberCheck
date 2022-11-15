// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFz9yfqnPg9aD-KZVsEHZvoPSeGtNNsdU",
  authDomain: "fireavals.firebaseapp.com",
  projectId: "fireavals",
  storageBucket: "fireavals.appspot.com",
  messagingSenderId: "132477215154",
  appId: "1:132477215154:web:6d42db28fa06409dc944ab"
};
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.firestore(app);
export { auth , firebase, db};