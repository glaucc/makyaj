// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

​​import {
  ​​  GoogleAuthProvider,
  ​​  getAuth,
  ​​  signInWithPopup,
  ​​  signInWithEmailAndPassword,
  ​​  createUserWithEmailAndPassword,
  ​​  sendPasswordResetEmail,
  ​​  signOut,
  ​​} from "firebase/auth";
  ​​import {
  ​​  getFirestore,
  ​​  query,
  ​​  getDocs,
  ​​  collection,
  ​​  where,
  ​​  addDoc,
  ​​} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase


const firebaseConfig = {
  apiKey: "AIzaSyAAx_knJ_qqxPkJQ_xoIZnxt_c6gb6Wdys",
  authDomain: "todoapp-eeeb7.firebaseapp.com",
  projectId: "todoapp-eeeb7",
  storageBucket: "todoapp-eeeb7.appspot.com",
  messagingSenderId: "1072574112522",
  appId: "1:1072574112522:web:65fc4e184aed9894dc90f3"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);
export default app;


//login
const secondaryAppConfig = {
  apiKey: "AIzaSyC2iNSwFXvSzg2Ofp5yQYKC8i_my3Gla_w",
  authDomain: "login-f4d40.firebaseapp.com",
  projectId: "login-f4d40",
  storageBucket: "login-f4d40.appspot.com",
  messagingSenderId: "825316115510",
  appId: "1:825316115510:web:dd0527c7f952a0c6fc8497",
  measurementId: "G-QZMLNBHQLX"
};

// Initialize login
const sec_app = initializeApp(secondaryAppConfig)


// Initialize Firebase Authentication and get a reference to the service

export const sec_auth = getAuth(sec_app);
const analytics = getAnalytics(sec_app);
​​const db = getFirestore(sec_app);


export default sec_app;





//google auth
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};