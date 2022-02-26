import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';

import { auth, db } from '..';

export const createAccount = (form) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((user) => {
        const userData = {
          displayName: `${form.firstname} ${form.surname}`,
          email: form.email,
          active: true,
          photoUrl: null,
          spotifyRefreshToken: null,
        };
        saveUser(user.user.uid, userData)
          .then(() => resolve(userData))
          .catch(reject);
      })
      .catch(reject);
  });
};

export const loginWithEmailAndPassword = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        getDoc(doc(db, 'users', user.uid))
          .then((docSnap) => {
            if (docSnap.exists()) {
              resolve(docSnap.data());
            } else {
              reject({ message: 'User not found' });
            }
          })
          .catch(reject);
      })
      .catch(reject);
  });
};

export const streamUser = (id, observer) => {
  return onSnapshot(doc(db, 'users', id), observer);
};

export const saveUser = async (uid, userData) => {
  return await setDoc(doc(db, 'users', uid), userData, { merge: true });
};

export const signOut = () => auth.signOut();

export const sendResetPasswordEmail = ({ email }) => {
  return auth.sendPasswordResetEmail(email);
};
