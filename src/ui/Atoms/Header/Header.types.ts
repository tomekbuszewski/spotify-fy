import * as React from "react";

export enum HEADER_VARIANT {
  NORMAL,
  LARGE,
}

export interface BaseProps {
  as?: React.ElementType;
  children?: any;
  variant?: HEADER_VARIANT;
}
