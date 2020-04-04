import * as React from "react";
import { text } from "@storybook/addon-knobs";

import { IoIosPlay } from "react-icons/io";

import { Button } from "./";
import { BUTTON_VARIANTS } from "@ui/Atoms/Button/Button.types";

export const Normal = () => <Button>{text("Example text", "Hello")}</Button>;

export const WithIcon = () => (
  <Button>
    <IoIosPlay />
  </Button>
);

export const CallToAction = () => (
  <Button variant={BUTTON_VARIANTS.CTA}>Listen on Spotify-fy</Button>
);

export default {
  component: Button,
  title: "Atoms/Button",
};
