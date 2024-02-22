// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSQ_Ze0YW35nzfqAgqPSzCPPPR42yh080",
  authDomain: "lmsone-edtech.firebaseapp.com",
  projectId: "lmsone-edtech",
  storageBucket: "lmsone-edtech.appspot.com",
  messagingSenderId: "829610267360",
  appId: "1:829610267360:web:cb45d0cee5ab312cd57685",
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
