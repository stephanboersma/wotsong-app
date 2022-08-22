import {
  EmailAuthProvider,
  linkWithCredential,
  signInAnonymously,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '.';
import { saveUser } from '../api/auth';

export const linkUserWithEmailAndPassword = (form) => {
  return new Promise((resolve, reject) => {
    const credential = EmailAuthProvider.credential(form.email, form.password);
    linkWithCredential(auth.currentUser, credential)
      .then(async () => {
        const userData = {
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

export const logOut = () => auth.signOut();

export const sendResetPasswordEmail = ({ email }) => {
  return auth.sendPasswordResetEmail(email);
};
