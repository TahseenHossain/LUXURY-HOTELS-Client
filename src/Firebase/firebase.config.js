// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAi8awrxpwKT23nShV0bjb1W4dGO30E6Kw",
  // authDomain: "luxuryhotels-b9a2c.firebaseapp.com",
  // projectId: "luxuryhotels-b9a2c",
  // storageBucket: "luxuryhotels-b9a2c.appspot.com",
  // messagingSenderId: "827806544423",
  // appId: "1:827806544423:web:6c646364e2db0b4a39d402"
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};

