import React, { useEffect } from 'react';
import { useContext } from 'react';

import CastReceiverContext from '../../contexts/CastReceiverContext';

const Test = () => {
  const { castContext } = useContext(CastReceiverContext);

  const gameSessionListener = (message) => {
    console.log(message);
  };
  useEffect(() => {
    if (castContext) {
      castContext.addCustomMessageListener(
        process.env.REACT_APP_CAST_NAMESPACE,
        gameSessionListener
      );
    }
  });
  if (castContext) {
    return (
      <>
        <h1>Start a new game</h1>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default Test;
