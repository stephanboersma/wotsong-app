import { useEffect } from 'react';
import { post } from '../api/api';
import { streamAccessToken } from '../api/firebase/authentication';
import create from 'zustand';
import { useNavigate } from 'react-router';

export const useSpotifyStore = create((set, get) => ({
  id: null,
  accessToken: null,
  expiresAt: null,
  isLoadingSpotifyToken: true,
  setIsLoaded: () =>
    set((state) => ({ ...state, isLoadingSpotifyToken: false })),
  setCredentials: (credentials) =>
    set({
      ...credentials,
      isLoadingSpotifyToken: false,
    }),
  authenticateWithSpotify: async (token) => {
    return post(
      `spotify/token`,
      {
        code: token,
      },
      true
    );
  },
  isConnectedWithSpotify: () => get().accessToken !== null,
}));

const useSpotifyApi = () => {
  const spotifyStore = useSpotifyStore();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = streamAccessToken({
      next: (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          spotifyStore.setCredentials(data);
        } else {
          navigate('/spotify');
          spotifyStore.setIsLoaded();
        }
      },
      error: (error) => console.log('An error occurred ' + error.message),
    });
    return unsubscribe;
  }, []);
  return {
    authenticateWithSpotify: spotifyStore.authenticateWithSpotify,
    isConnectedWithSpotify: spotifyStore.isConnectedWithSpotify,
    isLoadingSpotifyToken: spotifyStore.isLoadingSpotifyToken,
  };
};
export default useSpotifyApi;
