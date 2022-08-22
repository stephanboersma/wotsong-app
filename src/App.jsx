import React from 'react';
import { Outlet } from 'react-router-dom';
import { DefaultPageLayout } from './components';

function App() {
  return (
    <DefaultPageLayout>
      <Outlet />
    </DefaultPageLayout>
  );
}

export default App;
