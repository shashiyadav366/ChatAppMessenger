import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCpjSisGMYrvBXOLKQ4ULaeNmK5zU_8K-w",
  authDomain: "shashichatapp.firebaseapp.com",
  databaseURL: "https://shashichatapp-default-rtdb.firebaseio.com",
  projectId: "shashichatapp",
  storageBucket: "shashichatapp.appspot.com",
  messagingSenderId: "837915550458",
  appId: "1:837915550458:web:df32edf2030c97e2159f43"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
