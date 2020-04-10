/**
 * @author tomekbuszewski
 * @since 2020-04-10 08:57:18
 */

import * as React from "react";

import { StyledSidebarGroup } from "./SidebarGroup.styles";
import { BaseProps as Props } from "./SidebarGroup.types";

const SidebarGroup = (props: Props) => (
  <StyledSidebarGroup>{props.children}</StyledSidebarGroup>
);

export { SidebarGroup };
