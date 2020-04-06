/**
 * @author tomekbuszewski
 * @since 2020-04-04 16:47:14
 */

import * as React from "react";

import { StyledHeader } from "./Header.styles";
import { BaseProps as Props, HEADER_VARIANT } from "./Header.types";

const Header = (props: Props) => (
  <StyledHeader variant={props.variant || HEADER_VARIANT.NORMAL} as={props.as}>
    {props.children}
  </StyledHeader>
);

export { Header };
