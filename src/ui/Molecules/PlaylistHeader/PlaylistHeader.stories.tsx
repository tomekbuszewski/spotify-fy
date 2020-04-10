import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { PlaylistHeader } from "./";

export const Normal = () => (
  <PlaylistHeader>{text("Example text", "Hello")}</PlaylistHeader>
);

export default {
  component: PlaylistHeader,
  title: "Molecules/PlaylistHeader",
};
