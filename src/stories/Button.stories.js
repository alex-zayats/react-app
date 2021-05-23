import React from 'react';

import { Button } from '../components/Common/Button';

export default {
  title: 'Common/Button',
  component: Button,
  args: {
    children: 'Button'
  }
};

const Template = (args) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = {};

export const customizedButton = Template.bind({});
customizedButton.args = {
  style: {
    backgroundColor: 'orange',
    fontWeight: 'bold'
  }
};

export const identifiedButton = Template.bind({});
identifiedButton.args = {
  id: 'some-id',
  role: 'button'
};