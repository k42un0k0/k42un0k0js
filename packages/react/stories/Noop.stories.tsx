import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";

import { Noop } from "../lib/Noop";

export default {
  title: "Example/Noop",
  component: Noop,
} as Meta;

const Template: Story<ComponentProps<typeof Noop>> = () => <Noop />;

export const Default = Template.bind({});
Default.args = {};
