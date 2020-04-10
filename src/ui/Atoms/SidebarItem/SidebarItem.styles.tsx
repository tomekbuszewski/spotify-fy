/**
 * @author tomekbuszewski
 * @since 2020-04-10 08:33:07
 */

import styled from "styled-components";
import { BaseProps as Props } from "./SidebarItem.types";
import { rem, withTransition } from "@ui/theme";

const StyledSidebarItem = styled.li<Props>`
  ${withTransition("background")};

  background: ${p => p.theme.colors.highlight};
  color: ${p => p.theme.colors.white};

  list-style: none;
  border-radius: ${rem(4)};

  margin-bottom: ${rem(4)};

  font-size: ${rem(16)};

  a {
    padding: ${rem(4)} ${rem(8)};
    display: block;
    color: currentColor;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);

    a {
      color: currentColor;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  ${p => p.theme.breakpoints.tablet} {
    a {
      padding: ${rem(8)};
    }
  }
`;

export { StyledSidebarItem };
