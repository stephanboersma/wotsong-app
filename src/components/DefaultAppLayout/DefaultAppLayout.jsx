import React from 'react';

import AuthProvider from '../../providers/AuthProvider';

const DefaultAppLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen text-gray-200 bg-gray-900">
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};

export default DefaultAppLayout;
