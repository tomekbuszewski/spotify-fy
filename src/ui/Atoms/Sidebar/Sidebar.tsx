/**
 * @author tomekbuszewski
 * @since 2020-04-10 08:55:04
 */

import * as React from "react";

import { StyledSidebar } from "./Sidebar.styles";
import { BaseProps as Props } from "./Sidebar.types";

const Sidebar = (props: Props) => (
  <StyledSidebar active={props.active}>{props.children}</StyledSidebar>
);

export { Sidebar };
