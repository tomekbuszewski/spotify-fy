import * as React from "react";

export enum TEXT_FRAGMENT_VARIANTS {
  NORMAL,
  LARGE,
}

export interface BaseProps {
  as?: React.ElementType;
  children?: any;
  highlight?: boolean;
  variant?: TEXT_FRAGMENT_VARIANTS;
}
