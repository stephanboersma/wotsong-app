import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';

import AuthContext from '../contexts/AuthContext';
import { auth } from '../api/firebase';
import { getCurentUser } from '../api/api/auth';
import {
  linkUserWithEmailAndPassword,
  loginAnonymously,
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

  const linkUser = (payload) => {
    return new Promise((resolve) => {
      linkUserWithEmailAndPassword(payload).then((user) =>
        setCurrentUser(user)
      );
      resolve();
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
        const user = await loginAnonymously();
        setCurrentUser(user);
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
        linkUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
