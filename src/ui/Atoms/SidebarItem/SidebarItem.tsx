/**
 * @author tomekbuszewski
 * @since 2020-04-10 08:33:07
 */

import * as React from "react";
import { Link } from "react-router-dom";

import { StyledSidebarItem } from "./SidebarItem.styles";
import { BaseProps as Props } from "./SidebarItem.types";

const SidebarItem = (props: Props) => (
  <StyledSidebarItem>
    <Link to={props.to || ""}>{props.children}</Link>
  </StyledSidebarItem>
);

export { SidebarItem };
