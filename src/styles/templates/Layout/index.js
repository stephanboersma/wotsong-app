import React from 'react';
import { Outlet } from 'react-router';

import AuthProvider from '../../../providers/AuthProvider';

const Layout = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </div>
  );
};

export default Layout;
