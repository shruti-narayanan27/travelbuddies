// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCY6kagp6-YGupDLyh6U3AzPQ7-9eEhZuo",
  authDomain: "travelbuddies-bb514.firebaseapp.com",
  projectId: "travelbuddies-bb514",
  storageBucket: "travelbuddies-bb514.appspot.com", // ✅ fixed here
  messagingSenderId: "904499046559",
  appId: "1:904499046559:web:8a07e8771b4e5441935aaa",
  measurementId: "G-9J1QN10PBS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
