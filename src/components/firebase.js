import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQdw2dwBsacOnoZYxGqIhB0TMwLpEHERo",
  authDomain: "dhbw-chat.firebaseapp.com",
  projectId: "dhbw-chat",
  storageBucket: "dhbw-chat.appspot.com",
  messagingSenderId: "1087964122992",
  appId: "1:1087964122992:web:7379e9a2ea2c749fc409b5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default database;