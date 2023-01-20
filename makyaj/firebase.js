// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTLpIYJi3Wd2oKzkU-5Fx7GS-2pqCM9bk",
  authDomain: "oahp-161ba.firebaseapp.com",
  projectId: "oahp-161ba",
  storageBucket: "oahp-161ba.appspot.com",
  messagingSenderId: "919316172871",
  appId: "1:919316172871:web:b8a6564c0cb9a0b3a5e162",
  measurementId: "G-VXWW8DBLPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);