import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';

import AuthContext from '../contexts/AuthContext';
import { auth } from '../api/firebase';
import { getCurentUser } from '../api/api/auth';
import {
  linkUserWithEmailAndPassword,
  createAccountWithEmailAndPassword,
  loginWithEmailAndPassword,
  logOut,
} from '../api/firebase/authentication';
import { useNavigate } from 'react-router';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  const navigate = useNavigate();
  const isAuthed = () => {
    if (currentUser !== null) {
      if (currentUser?.email !== null) {
        return true;
      }
    }
    return false;
  };

  const createUser = (payload) => {
    return new Promise((resolve) => {
      if (!isAuthed() && !currentUser) {
        createAccountWithEmailAndPassword(payload).then((user) => {
          setCurrentUser(user);
          resolve();
        });
      } else if (currentUser?.id) {
        linkUserWithEmailAndPassword(payload).then((user) => {
          setCurrentUser(user);
          resolve();
        });
      }
    });
  };

  const login = (email, password) => {
    loginWithEmailAndPassword(email, password).then(async (userCredentials) => {
      print(userCredentials.user);
      const user = await getCurentUser();
      setCurrentUser(user);
      setLoadingAuthState(false);
      navigate('/profile');
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authState) => {
      console.log('Authstate: ', { authState });
      if (authState && authState.uid) {
        const user = await getCurentUser();
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
        login,
        createUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
