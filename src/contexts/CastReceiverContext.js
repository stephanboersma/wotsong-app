import { createContext } from 'react';

const CastReceiverContext = createContext({
  session: null,
  castReceiverContext: null,
});

export default CastReceiverContext;
