
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBG71Xn_K4C7LwD1uT4PG8I6a_TtZZ7xuk",
  authDomain: "trust-our-souls.firebaseapp.com",
  projectId: "trust-our-souls",
  storageBucket: "trust-our-souls.appspot.com",
  messagingSenderId: "519742906643",
  appId: "1:519742906643:web:4db29257cacf622741fae6",
  measurementId: "G-X7N20G4CKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth };
