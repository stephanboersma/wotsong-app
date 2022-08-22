import { createContext } from 'react';

const AuthContext = createContext({
  user: null,
  authenticated: false,
  loadingAuthState: false,
  loginWithEmailAndPassword: null,
  linkUserWithEmailAndPassword: null,
});

export default AuthContext;
