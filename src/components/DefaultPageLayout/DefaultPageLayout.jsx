import React from 'react';

import AuthProvider from '../../providers/AuthProvider';

const DefaultPageLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};

export default DefaultPageLayout;
