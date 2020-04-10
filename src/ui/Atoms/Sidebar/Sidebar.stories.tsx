import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { Sidebar } from "./";

export const Normal = () => <Sidebar>{text("Example text", "Hello")}</Sidebar>;

export default {
  component: Sidebar,
  title: "Atoms/Sidebar",
};
