/**
 * @author tomekbuszewski
 * @since 2020-04-04 16:57:32
 */

import * as React from "react";

import { StyledTextFragment } from "./TextFragment.styles";
import {
  BaseProps as Props,
  TEXT_FRAGMENT_VARIANTS,
} from "./TextFragment.types";

const TextFragment = (props: Props) => (
  <StyledTextFragment
    variant={props.variant || TEXT_FRAGMENT_VARIANTS.NORMAL}
    highlight={props.highlight || false}
    {...props}
  >
    {props.children}
  </StyledTextFragment>
);

export { TextFragment };
