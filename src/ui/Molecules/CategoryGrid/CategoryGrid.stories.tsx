import * as React from "react";

import { CategoryGrid } from "./";

const CATEGORIES = Array(30)
  .fill(null)
  .map((_, i) => ({
    id: `Category-${i}`,
    name: `Category ${i}`,
    icons: [
      { url: "https://www.fillmurray.com/g/500/500", height: 0, width: 0 },
    ],
  }));

export const Normal = () => <CategoryGrid items={CATEGORIES} />;

export default {
  component: CategoryGrid,
  title: "Molecules/CategoryGrid",
};
