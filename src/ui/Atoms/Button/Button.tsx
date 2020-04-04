/**
* @author tomekbuszewski
* @since 2020-04-04 07:37:50
*/

import * as React from "react";

import { StyledButton } from "./Button.styles";
import { BaseProps as Props } from "./Button.types";

const Button = (props: Props) => (
  <StyledButton variant={props.variant}>{props.children}</StyledButton>
);

export { Button }
