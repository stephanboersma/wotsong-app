const scopes = [
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-modify-playback-state',
  'playlist-read-private',
  'playlist-read-collaborative',
];

const useSpotifyApi = () => {
  const getAccessToken = async (type, token) => {
    return fetch(
      `${process.env.REACT_APP_SPOTIFY_TOKEN_ENDPOINT}/spotify/token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: type,
          code: token,
        }),
      }
    ).then((res) => res.json());
  };
  const getAuthLink = () => {
    return `${
      process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT
    }/authorize?client_id=${
      process.env.REACT_APP_SPOTIFY_CLIENT_ID
    }&redirect_uri=${
      process.env.REACT_APP_BASE_URL
    }/spotify/authorize&scope=${scopes.join('%20')}&response_type=code`;
  };
  return {
    getAccessToken,
    getAuthLink,
  };
};
export default useSpotifyApi;
