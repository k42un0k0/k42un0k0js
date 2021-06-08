import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";

import { Skeleton } from "../lib/Skeleton";

export default {
  title: "Example/Skeleton",
  component: Skeleton,
} as Meta;

const Template: Story<ComponentProps<typeof Skeleton>> = (args) => (
  <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
