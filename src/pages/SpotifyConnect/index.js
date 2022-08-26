import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import useSpotifyApi from '../../hooks/useSpotifyApi';
const SpotifyConnect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { authenticateWithSpotify } = useSpotifyApi();
  const [spotifyAuthState, setSpotifyAuthState] = useState({
    authenticating: false,
    completed: false,
  });

  useEffect(async () => {
    const params = new URLSearchParams(location.search);
    if (params.has('code')) {
      setSpotifyAuthState({
        ...spotifyAuthState,
        authenticating: true,
      });
      authenticateWithSpotify(params.get('code'))
        .then(() => {
          setSpotifyAuthState({
            authenticating: false,
            completed: true,
          });
          setTimeout(() => navigate('/profile'), 3000);
        })
        .catch(console.log);
    }
  }, []);

  if (spotifyAuthState?.authenticating) {
    return <h1>Loading</h1>;
  } else if (!spotifyAuthState?.authenticating && !spotifyAuthState.completed) {
    return (
      <div className="max-w-6xl mx-auto px-5 py-24 ">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <button
            onClick={() =>
              window.open('http://127.0.0.1:5000/api/spotify/connect', '_self')
            }
            className="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full"
          >
            Connect with Spotify
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-6xl mx-auto px-5 py-24 ">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-center sm:text-5xl sm:leading-none md:text-6xl">
            Successfully connected with Spotify! 🔥
          </h1>
        </div>
      </div>
    );
  }
};

export default SpotifyConnect;
