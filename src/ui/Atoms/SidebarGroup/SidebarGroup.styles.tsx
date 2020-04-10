/**
 * @author tomekbuszewski
 * @since 2020-04-10 08:57:18
 */

import styled from "styled-components";
import { BaseProps as Props } from "./SidebarGroup.types";
import { rem } from "@ui/theme";

const StyledSidebarGroup = styled.ul<Props>`
  padding: ${rem(8)};
  border-bottom: ${rem(1)} solid ${p => p.theme.colors.highlight};
  margin: 0;

  &:last-of-type {
    border: 0;
  }

  ${p => p.theme.breakpoints.tablet} {
    padding: ${rem(16)};
  }
`;

export { StyledSidebarGroup };
