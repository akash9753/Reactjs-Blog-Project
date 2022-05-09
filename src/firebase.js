// import firebase from 'firebase/app';
// import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBSH88PDIJRzyJ_ll0PuPhGqslmTJilzqw",
  authDomain: "react-hooks-blog-ad67b.firebaseapp.com",
  projectId: "react-hooks-blog-ad67b",
  storageBucket: "react-hooks-blog-ad67b.appspot.com",
  messagingSenderId: "895489493193",
  appId: "1:895489493193:web:206ed17460d0fbf0592518"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();