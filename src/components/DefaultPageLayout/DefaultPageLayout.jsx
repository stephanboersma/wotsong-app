import React from 'react';

const DefaultPageLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen text-gray-200 bg-gray-900">
      {children}
    </div>
  );
};

export default DefaultPageLayout;
