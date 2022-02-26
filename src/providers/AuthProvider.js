import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';

import AuthContext from '../contexts/AuthContext';
import { auth } from '../firebase';
import { streamUser } from '../firebase/api/authentication';
import useSpotifyApi from '../hooks/useSpotifyApi';
import useStickyState from '../hooks/useStickyState';
import { calculateExpiresIn } from '../utils/expires_in';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  const [spotifyCredentials, setSpotifyCredentials] = useStickyState({
    access_token: null,
    expires_in: null,
    refresh_token: null,
  });
  const { getAccessToken } = useSpotifyApi();

  const refreshSpotifyToken = async (refresh_token) => {
    return await getAccessToken('refresh_token', refresh_token);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (authState) => {
      if (authState) {
        if (authState.uid) {
          streamUser(authState.uid, {
            next: async (snapshot) => {
              const user = { ...snapshot.data(), id: snapshot.id };
              if (
                user.spotifyRefreshToken &&
                (spotifyCredentials.expires_in < Date.now() ||
                  !spotifyCredentials.access_token)
              ) {
                const credentials = await refreshSpotifyToken(
                  user.spotifyRefreshToken
                );
                setSpotifyCredentials({
                  ...spotifyCredentials,
                  access_token: credentials.access_token,
                  expires_in: calculateExpiresIn(credentials.expires_in),
                });
              }
              setUser(user);
              setLoadingAuthState(false);
            },
            error: (error) => console.log('An error occurred ' + error.message),
          });
        } else {
          setLoadingAuthState(false);
        }
      } else {
        setLoadingAuthState(false);
      }
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        spotifyCredentials,
        setSpotifyCredentials,
        authenticated: user !== null,
        setUser,
        loadingAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
