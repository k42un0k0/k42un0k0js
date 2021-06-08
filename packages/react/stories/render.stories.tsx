import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";

import { renderMapByEntries } from "../lib/render";

export default {
  title: "Example/render",
} as Meta;

const Template: Story<{ map: Map<string, any> }> = (args) => (
  <dl>
    {renderMapByEntries(args.map, (e) => {
      return (
        <>
          <dt>{e[0]}</dt>
          <dd>{e[1]}</dd>
        </>
      );
    })}
  </dl>
);

export const RenderMapByEntries = Template.bind({});
RenderMapByEntries.args = {
  map: new Map<string, any>([
    ["hello", "world"],
    ["test", 2],
  ]),
};
