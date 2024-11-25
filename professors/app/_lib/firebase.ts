import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_NhBsb9FzcXibwiDWiKkaLULsT8vev2Y",
  authDomain: "smarteducaapp.firebaseapp.com",
  projectId: "smarteducaapp",
  storageBucket: "smarteducaapp.firebasestorage.app",
  messagingSenderId: "708757141137",
  appId: "1:708757141137:web:9973340526bddcfdb83130",
  measurementId: "G-4RZGVPG48B",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const firestore = getFirestore(app);
