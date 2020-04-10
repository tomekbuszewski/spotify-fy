import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { AppHeader } from "./";

export const Normal = () => (
  <AppHeader>{text("Example text", "Hello")}</AppHeader>
);

export default {
  component: AppHeader,
  title: "Molecules/AppHeader",
};
