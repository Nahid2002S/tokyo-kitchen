// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMuVVniC4iUKtJLn16YrO8soX6MGzJB2U",
  authDomain: "assignment-10-auth-bfb28.firebaseapp.com",
  projectId: "assignment-10-auth-bfb28",
  storageBucket: "assignment-10-auth-bfb28.appspot.com",
  messagingSenderId: "36818290550",
  appId: "1:36818290550:web:b8920d54cd68f382859c57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;