import firebase from "firebase";
import "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDZ297nrLnK78Ujhg4cHaN2wIey30IFLFs",
  authDomain: "studiobodhi-a1bf4.firebaseapp.com",
  projectId: "studiobodhi-a1bf4",
  storageBucket: "studiobodhi-a1bf4.appspot.com",
  messagingSenderId: "545185000173",
  appId: "1:545185000173:web:8a7cece9f93997e0a2bae4",
  measurementId: "G-QCETGWVEK1"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export { storage, firebase as default }


// // // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);