import 'firebase/auth';
import 'firebase/storage';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseApp = initializeApp({
  apiKey: String(process.env.REACT_APP_FIREBASE_API_KEY),
  authDomain: String(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
  projectId: String(process.env.REACT_APP_FIREBASE_PROJECT_ID),
  storageBucket: String(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: String(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
  //measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  appId: String(process.env.REACT_APP_FIREBASE_APP_ID),
});

export const db = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);

export const auth = getAuth(firebaseApp);

export default firebaseApp;
