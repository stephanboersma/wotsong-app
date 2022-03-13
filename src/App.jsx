import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      {/* <Route
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

      <Route
        path="/cast"
        element={
          <CastReceiverProvider>
            <Cast />
          </CastReceiverProvider>
        }
      /> */}
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
