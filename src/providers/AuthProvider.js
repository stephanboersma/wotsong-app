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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authState) => {
      if (authState && authState.uid) {
        const user = await getCurentUser();
        setCurrentUser(user);
        setLoadingAuthState(false);
      } else {
        await loginAnonymously();
      }
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        authenticated: currentUser !== null,
        loadingAuthState,
        loginWithEmailAndPassword,
        linkUserWithEmailAndPassword,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
