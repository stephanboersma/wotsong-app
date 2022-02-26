import React, { useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';
import CastSenderContext from '../../contexts/CastSenderContext';
import { signOut } from '../../firebase/api/authentication';
import useSpotifyApi from '../../hooks/useSpotifyApi';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { castContext } = useContext(CastSenderContext);
  const { getAuthLink } = useSpotifyApi();
  const startGame = () => {
    const session = castContext.getCurrentSession();

    if (session) {
      session.sendMessage(process.env.REACT_APP_CAST_NAMESPACE, {
        sessionId: 'TEST',
      });
    }
  };
  if (user.spotifyRefreshToken) {
    return (
      <>
        <button onClick={() => signOut()}>sign out</button>
        <button onClick={() => startGame()}>Start Game sesion</button>
        <div id="cast-button" style={{ maxWidth: '50px', maxHeight: '50px' }}>
          <google-cast-launcher></google-cast-launcher>
        </div>
      </>
    );
  } else {
    return (
      <a href={getAuthLink()}>
        <button>Connect Spotify account</button>
      </a>
    );
  }
};

export default Profile;
