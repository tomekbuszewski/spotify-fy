import * as React from "react";

import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { PlayButton } from "./";

storiesOf("Atoms/PlayButton", module).add("Normal", () => (
  <PlayButton>{text("Example text", "Hello")}</PlayButton>
));
