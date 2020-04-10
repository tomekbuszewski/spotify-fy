import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { Wrapper } from "./";

export const Normal = () => <Wrapper>{text("Example text", "Hello")}</Wrapper>;

export default {
  component: Wrapper,
  title: "Atoms/Wrapper",
};
