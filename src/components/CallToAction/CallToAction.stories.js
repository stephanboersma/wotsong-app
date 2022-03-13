import React from 'react';

import CallToAction from './CallToAction';

export default {
  title: 'Example/CallToAction',
  component: CallToAction,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <CallToAction {...args} />;

export const Default = Template.bind({});
