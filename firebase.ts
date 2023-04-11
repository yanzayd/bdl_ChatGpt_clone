import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD81giuK4punr-NQu1_yF3COjZkC7CW1GE",
  authDomain: "bdl-chatggpt-messanger.firebaseapp.com",
  projectId: "bdl-chatggpt-messanger",
  storageBucket: "bdl-chatggpt-messanger.appspot.com",
  messagingSenderId: "659981365746",
  appId: "1:659981365746:web:f01fe15ddac05605383b6b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig); // this is called a sigle turn patern encoding
const db = getFirestore(app);

export { db };
