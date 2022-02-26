import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import AuthContext from '../../contexts/AuthContext';
import { saveUser } from '../../firebase/api/authentication';
import useSpotifyApi from '../../hooks/useSpotifyApi';
import { calculateExpiresIn } from '../../utils/expires_in';

const SpotifyCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { getAccessToken } = useSpotifyApi();
  const [error, setError] = useState(false);
  const { user, setSpotifyCredentials } = useContext(AuthContext);
  useEffect(async () => {
    const params = new URLSearchParams(location.search);
    if (params.has('code')) {
      const credentials = await getAccessToken(
        'authorization_code',
        params.get('code')
      );
      console.log('credentials', credentials);
      setSpotifyCredentials({
        access_token: credentials.access_token,
        refresh_token: credentials.refresh_token,
        expires_in: calculateExpiresIn(credentials.expires_in),
      });
      await saveUser(user.id, {
        spotifyRefreshToken: credentials.refresh_token,
      });
      navigate('/app');
    } else {
      setError(true);
      setTimeout(() => navigate('/app'), 5000);
    }
  }, []);

  if (!error) {
    return <h1>Loading</h1>;
  } else {
    return (
      <h1>Error: Query param code is missing... Redirecting to profile</h1>
    );
  }
};

export default SpotifyCallback;
