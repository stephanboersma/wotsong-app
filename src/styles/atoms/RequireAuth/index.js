import React, { useContext } from 'react';
import { Navigate } from 'react-router';

import AuthContext from '../../../contexts/AuthContext';

const RequireAuth = ({ children }) => {
  const { authenticated, loadingAuthState } = useContext(AuthContext);
  if (loadingAuthState) {
    return <></>;
  }
  if (!authenticated) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default RequireAuth;
