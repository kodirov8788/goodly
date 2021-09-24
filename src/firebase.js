import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeovKZ9J1kPH9M14usy8N1isCVGVOgw9E",
  authDomain: "disney-clone-12dc3.firebaseapp.com",
  projectId: "disney-clone-12dc3",
  storageBucket: "disney-clone-12dc3.appspot.com",
  messagingSenderId: "816265751137",
  appId: "1:816265751137:web:df7930268fa63f2e9b5820",
  measurementId: "G-WS0PE7DRBY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
