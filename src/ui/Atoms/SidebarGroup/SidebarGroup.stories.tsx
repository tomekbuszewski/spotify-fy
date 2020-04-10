import * as React from "react";

import { SidebarGroup } from "./";
import { SidebarItem } from "@ui/Atoms";

export const Normal = () => (
  <React.Fragment>
    <SidebarGroup>
      <SidebarItem>One</SidebarItem>
      <SidebarItem>Two</SidebarItem>
    </SidebarGroup>
    <SidebarGroup>
      <SidebarItem>One</SidebarItem>
      <SidebarItem>Two</SidebarItem>
    </SidebarGroup>
  </React.Fragment>
);

export default {
  component: SidebarGroup,
  title: "Atoms/SidebarGroup",
};
