// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDER9MHS6Ext43RHVpD2ZTNHKiTIbW7stw",
  authDomain: "cybercheck-415b3.firebaseapp.com",
  projectId: "cybercheck-415b3",
  storageBucket: "cybercheck-415b3.appspot.com",
  messagingSenderId: "427335100173",
  appId: "1:427335100173:web:dbbd9ac50dd49f9504f244",
  measurementId: "G-GLK13KZJ6G"
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