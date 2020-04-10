import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { TextFragment } from "./";
import { TEXT_FRAGMENT_VARIANTS } from "@ui/Atoms/TextFragment/TextFragment.types";

export const Normal = () => (
  <TextFragment>{text("Example text", "Neil Young")}</TextFragment>
);

export const Large = () => (
  <TextFragment variant={TEXT_FRAGMENT_VARIANTS.LARGE}>
    {text("Example text", "Southern Man – 2009 Remaster")}
  </TextFragment>
);

export default {
  component: TextFragment,
  title: "Atoms/TextFragment",
};
