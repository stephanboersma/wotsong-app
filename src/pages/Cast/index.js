import React from 'react';

import Test from '../../styles/atoms/Test';

const Cast = () => {
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
        <Test />
      </div>
    </div>
  );
};

export default Cast;
