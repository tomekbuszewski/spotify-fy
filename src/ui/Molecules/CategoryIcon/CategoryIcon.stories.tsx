import * as React from "react";

import { text } from "@storybook/addon-knobs";

import { CategoryIcon } from "./";

const CATEGORY = {
  id: "some-category",
  name: "Some category",
  icons: [{ url: "https://www.fillmurray.com/g/500/500", height: 0, width: 0 }],
};

export const Normal = () => (
  <CategoryIcon {...CATEGORY}>{text("Example text", "Hello")}</CategoryIcon>
);

export default {
  component: CategoryIcon,
  title: "Molecules/CategoryIcon",
};
