
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-agent-849f7.firebaseapp.com",
  projectId: "ai-interview-agent-849f7",
  storageBucket: "ai-interview-agent-849f7.firebasestorage.app",
  messagingSenderId: "589323126050",
  appId: "1:589323126050:web:26d8499423c1164ca2d17b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}