/**
 * @author tomekbuszewski
 * @since 2020-04-10 11:30:13
 */

import * as React from "react";

import { StyledWrapper } from "./Wrapper.styles";
import { BaseProps as Props } from "./Wrapper.types";

const Wrapper = (props: Props) => (
  <StyledWrapper>{props.children}</StyledWrapper>
);

export { Wrapper };
