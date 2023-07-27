import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyC22RItGPzj7e7dF4l2gk3TZSq3Nfaczeg",
  authDomain: "real-estate-listings-web-app.firebaseapp.com",
  projectId: "real-estate-listings-web-app",
  storageBucket: "real-estate-listings-web-app.appspot.com",
  messagingSenderId: "928549225005",
  appId: "1:928549225005:web:b96fb3973c40023ad72ea4",
  measurementId: "G-LR8P90F013",
};

//INITIALISE FIREBASE
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
