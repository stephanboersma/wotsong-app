import React from 'react';
import { DefaultPageLayout } from '../../components';

import { CallToAction, Navbar } from '../../components';

const Landing = () => {
  return (
    <DefaultPageLayout>
      <Navbar></Navbar>
      <CallToAction></CallToAction>
    </DefaultPageLayout>
  );
};

export default Landing;
