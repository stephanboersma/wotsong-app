import React, { useContext } from 'react';
import { logOut } from '../../api/firebase/authentication';

import CastSenderContext from '../../contexts/CastSenderContext';
import useSpotifyApi from '../../hooks/useSpotifyApi';

const Profile = () => {
  const { castContext } = useContext(CastSenderContext);
  const { isConnectedWithSpotify } = useSpotifyApi();
  const startGame = () => {
    const session = castContext.getCurrentSession();

    if (session) {
      session.sendMessage(process.env.REACT_APP_CAST_NAMESPACE, {
        sessionId: 'TEST',
      });
    }
  };

  return (
    <>
      <button onClick={() => logOut()}>sign out</button>
      <button onClick={() => startGame()}>Start Game sesion</button>
      {isConnectedWithSpotify() && <h1>Connected</h1>}
      <div id="cast-button" style={{ maxWidth: '50px', maxHeight: '50px' }}>
        <google-cast-launcher></google-cast-launcher>
      </div>
    </>
  );
};

export default Profile;
