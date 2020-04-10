import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { SidebarItem } from "./";

export const Normal = () => (
  <SidebarItem>{text("Example text", "Hello")}</SidebarItem>
);

export const Group = () => (
  <React.Fragment>
    <SidebarItem>One</SidebarItem>
    <SidebarItem>Two</SidebarItem>
  </React.Fragment>
);

export default {
  component: SidebarItem,
  title: "Atoms/SidebarItem",
};
