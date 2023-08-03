import React from 'react';

import HeaderTitle from './HeaderTitle';

export default {
  title: 'HeaderTitle',
  component: HeaderTitle,
};

const Template = (args) => <HeaderTitle {...args} />;

export const Welcome = Template.bind({});

Welcome.args = {
  primaryTitle: "Hello",
  secondaryTitle: "Being my initial attempt, there's a chance it might not fully satisfy the anticipated standards.",
};

export const HelloWorld = Template.bind({});

HelloWorld.args = {
  primaryTitle: "Hello",
  secondaryTitle: "World",
};

export const SayHi = Template.bind({});

SayHi.args = {
  primaryTitle: "Say",
  secondaryTitle: "Hi",
};

