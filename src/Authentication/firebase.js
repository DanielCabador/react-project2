import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo7ybeIQJnJZa7ZD3LSF5wsJmjfNg_QpY",
  authDomain: "resolute-d9f3a.firebaseapp.com",
  projectId: "resolute-d9f3a",
  storageBucket: "resolute-d9f3a.appspot.com",
  messagingSenderId: "787804657316",
  appId: "1:787804657316:web:4fad7db4bbbab50ce5b831",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
