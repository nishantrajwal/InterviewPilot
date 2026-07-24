
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-2aca6.firebaseapp.com",
  projectId: "interviewiq-2aca6",
  storageBucket: "interviewiq-2aca6.firebasestorage.app",
  messagingSenderId: "548852246886",
  appId: "1:548852246886:web:ab6d4c46fd009d87aac0a7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}