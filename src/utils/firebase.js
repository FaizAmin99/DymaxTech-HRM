import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// const {
//   initializeAppCheck,
//   ReCaptchaV3Provider,
// } = require("firebase/app-check");

const firebaseConfig = {
  apiKey: "AIzaSyBAYOodwu1beXTbw0zjhnecjGykgIdQZro",
  authDomain: "auth-2fc4e.firebaseapp.com",
  databaseURL: "https://auth-2fc4e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-2fc4e",
  storageBucket: "auth-2fc4e.appspot.com",
  messagingSenderId: "580593972277",
  appId: "1:580593972277:web:c8a5041133138f0b9fad7c",
  measurementId: "G-XYWTRWX3SQ"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const rtdb = getDatabase(app);

// const appCheck = initializeAppCheck(app, {
//   // FIREBASE_APPCHECK_DEBUG_TOKEN: true,
//   provider: new ReCaptchaV3Provider(
//     process.env.REACT_APP_FIREBASE_APP_CHECK_TOKEN
//   ),
//   isTokenAutoRefreshEnabled: true,
// });

export { db, auth, rtdb };
