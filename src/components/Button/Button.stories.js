import React from 'react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const FilledButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FilledButton.args = {
  label: 'Button',
};

export const InvertedButton = Template.bind({});
InvertedButton.args = {
  isInverted: true,
  label: 'Button',
};
