import { initializeApp } from "firebase/app";

const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,

    // console.log(process.env.FIREBASE_API_KEY);

    // apiKey: "AIzaSyAEs_ZC3lVWilMKcGtSrcZ0mZrkXB9_w4U",
    // authDomain: "react-quiz-3dd78.firebaseapp.com",
    // projectId: "react-quiz-3dd78",
    // storageBucket: "react-quiz-3dd78.appspot.com",
    // messagingSenderId: "441367724221",
    // appId: "1:441367724221:web:636fc998343ce38ed5b7d4",
});

export default app;
