import * as React from "react";

export enum BUTTON_VARIANTS {
  NORMAL,
  CTA,
}

export enum ATOM_BUTTON_TEST_IDS {
  NORMAL = "atom-button-normal",
  CTA = "atom-button-cta",
  WITH_ICON = "atom-button-with-icon",
}

export interface BaseProps {
  children?: React.ReactNode;
  variant?: BUTTON_VARIANTS;
}