import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Cast from './pages/Cast';
import Register from './pages/Register';
import Landing from './pages/Landing';
import AuthProvider from './providers/AuthProvider';
import Login from './pages/Login/Login';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <App />
            </AuthProvider>
          }
        >
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="cast" element={<Cast />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>Theres nothing here!.</p>
            </main>
          }
        />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
