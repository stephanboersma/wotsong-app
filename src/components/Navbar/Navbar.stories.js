import React from 'react';

import Navbar from './Navbar';

export default {
  title: 'Example/Navbar',
  component: Navbar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
