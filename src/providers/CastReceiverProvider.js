import React from 'react';

import CastReceiverContext from '../contexts/CastReceiverContext';
import useCastReceiver from '../hooks/useCastReceiver';

const CastReceiverProvider = ({ children }) => {
  const { session, castContext } = useCastReceiver();

  return (
    <CastReceiverContext.Provider value={{ castContext, session }}>
      {children}
    </CastReceiverContext.Provider>
  );
};

export default CastReceiverProvider;
