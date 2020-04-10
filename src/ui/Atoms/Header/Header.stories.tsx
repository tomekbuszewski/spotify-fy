import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { Header } from "./";
import { HEADER_VARIANT } from "@ui/Atoms/Header/Header.types";

export const Normal = () => <Header>{text("Example text", "11 songs")}</Header>;

export const Large = () => (
  <Header variant={HEADER_VARIANT.LARGE}>
    {text("Example text", "After the Gold Rush (2009 Remaster)")}
  </Header>
);

export default {
  component: Header,
  title: "Atoms/Header",
};
