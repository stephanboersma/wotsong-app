import React, { useContext } from 'react';
import { Navigate } from 'react-router';

import AuthContext from '../../contexts/AuthContext';

const RequireAuth = ({ children }) => {
  const { isAuthed, loadingAuthState } = useContext(AuthContext);
  if (loadingAuthState) {
    return <></>;
  }
  if (!isAuthed()) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default RequireAuth;
