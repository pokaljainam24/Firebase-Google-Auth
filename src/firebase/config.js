import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7Wbl_D5FfeRabMH7TQT1KhSCG1ycUO1E",
  authDomain: "fir-auth-89d39.firebaseapp.com",
  projectId: "fir-auth-89d39",
  storageBucket: "fir-auth-89d39.appspot.com",
  messagingSenderId: "84053781852",
  appId: "1:84053781852:web:a377c5035152cc3ded6599",
  measurementId: "G-1GLTMEJH8V"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
