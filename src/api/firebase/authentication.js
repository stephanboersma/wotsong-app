import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  linkWithCredential,
  signInAnonymously,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

import { auth, db } from '.';
import { saveUser } from '../api/auth';

export const createAccountWithEmailAndPassword = (form) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(async (userCredential) => {
        const userData = {
          id: userCredential.user.uid,
          alias: form.alias,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
        };
        saveUser(userData)
          .then((user) => resolve(user))
          .catch(reject);
      })
      .catch(reject);
  });
};

export const linkUserWithEmailAndPassword = (form) => {
  return new Promise((resolve, reject) => {
    const credential = EmailAuthProvider.credential(form.email, form.password);
    linkWithCredential(auth.currentUser, credential)
      .then(async () => {
        const userData = {
          id: auth.currentUser.uid,
          alias: form.alias,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
        };
        saveUser(userData)
          .then((user) => resolve(user))
          .catch(reject);
      })
      .catch(reject);
  });
};

export const loginWithEmailAndPassword = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(resolve)
      .catch(reject);
  });
};
export const loginAnonymously = () => {
  return new Promise((resolve, reject) => {
    signInAnonymously(auth).catch(reject);
  });
};

export const streamAccessToken = (observer) => {
  return onSnapshot(
    doc(db, 'spotify_access_tokens', auth.currentUser.uid),
    observer
  );
};

export const getAccessToken = async () => {
  const snapshot = await getDoc(
    doc(db, 'spotify_access_tokens', auth.currentUser.uid)
  );
  return snapshot.exists() ? snapshot.data() : null;
};

export const logOut = () => {
  return auth.signOut();
};

export const sendResetPasswordEmail = ({ email }) => {
  return auth.sendPasswordResetEmail(email);
};
