import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';

import AuthContext from '../contexts/AuthContext';
import { auth } from '../api/firebase';
import { getCurentUser } from '../api/api/auth';
import {
  linkUserWithEmailAndPassword,
  createUserWithEmailAndPassword,
  loginWithEmailAndPassword,
  logOut,
} from '../api/firebase/authentication';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loadingAuthState, setLoadingAuthState] = useState(true);

  const isAuthed = () => {
    if (currentUser !== null) {
      if (currentUser?.email !== null) {
        return true;
      }
    }
    return false;
  };

  const createUser = (payload) => {
    return new Promise((resolve, reject) => {
      if (!isAuthed() && !currentUser) {
        createUserWithEmailAndPassword(payload).then((user) => {
          setCurrentUser(user);
          resolve();
        });
      } else if (currentUser?.id) {
        linkUserWithEmailAndPassword(payload).then((user) => {
          setCurrentUser(user);
          resolve();
        });
      }
      reject();
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authState) => {
      console.log(authState);
      if (authState && authState.uid) {
        const user = await getCurentUser();
        console.table(user);
        setCurrentUser(user);
        setLoadingAuthState(false);
      } else {
        setCurrentUser(null);
        setLoadingAuthState(false);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loadingAuthState,
        isAuthed,
        loginWithEmailAndPassword,
        createUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
