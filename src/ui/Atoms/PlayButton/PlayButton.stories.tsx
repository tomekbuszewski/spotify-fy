import * as React from "react";

import { boolean } from "@storybook/addon-knobs";

import { PlayButton } from "./";

export const Normal = () => (
  <PlayButton active={boolean("Is playing", false)} />
);

export default {
  component: PlayButton,
  title: "Atoms/PlayButton",
}
