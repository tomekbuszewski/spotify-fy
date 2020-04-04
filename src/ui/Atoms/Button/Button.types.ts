import * as React from "react";

export enum BUTTON_VARIANTS {
  NORMAL,
  CTA,
}

export interface BaseProps {
  children?: React.ReactNode;
  variant?: BUTTON_VARIANTS;
}