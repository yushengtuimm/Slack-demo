import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqrhea6dvf0t56V3GPz6IpDkd0rP4NwkQ",
  authDomain: "slack-demo-dd6d7.firebaseapp.com",
  projectId: "slack-demo-dd6d7",
  storageBucket: "slack-demo-dd6d7.appspot.com",
  messagingSenderId: "792353825952",
  appId: "1:792353825952:web:c208a7d6be3771c8ecd5c5",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
