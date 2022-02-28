import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cast from './pages/Cast';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import SpotifyCallback from './pages/SpotifyCallback';
import CastReceiverProvider from './providers/CastReceiverProvider';
import CastSenderProvider from './providers/CastSenderProvider';
import RequireAuth from './styles/atoms/RequireAuth';
import Layout from './styles/templates/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />

        <Route
          path="/app"
          element={
            <CastSenderProvider>
              <RequireAuth>
                <Profile />
              </RequireAuth>
            </CastSenderProvider>
          }
        />
        <Route
          path="/spotify/authorize"
          element={
            <RequireAuth>
              <SpotifyCallback />
            </RequireAuth>
          }
        />
      </Route>

      <Route
        path="/cast"
        element={
          <CastReceiverProvider>
            <Cast />
          </CastReceiverProvider>
        }
      />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>Theres nothing here!.</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
