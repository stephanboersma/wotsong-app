import React from 'react';

import CastSenderContext from '../contexts/CastSenderContext';
import useCastSender from '../hooks/useCastSender';

const CastSenderProvider = ({ children }) => {
  const { castContext } = useCastSender();

  return (
    <CastSenderContext.Provider value={{ castContext }}>
      {children}
    </CastSenderContext.Provider>
  );
};

export default CastSenderProvider;
