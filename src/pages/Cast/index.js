import React, { useContext, useEffect } from 'react';
import CastReceiverContext from '../../contexts/CastReceiverContext';

const Cast = () => {
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
      <div
        style={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '500px',
            height: '500px',
            background: 'lightgrey',
          }}
        >
          <h1>Start a new game</h1>
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default Cast;
