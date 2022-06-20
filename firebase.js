import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCq2xVVPoHQBD49sn02_R0tD3SShj6OCd0",
  authDomain: "twill-project.firebaseapp.com",
  projectId: "twill-project",
  storageBucket: "twill-project.appspot.com",
  messagingSenderId: "305863874133",
  appId: "1:305863874133:web:4bc0b7d3c243e75081e6dc",
  measurementId: "G-CXH5FKGFWS",
};

// Implementing firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
