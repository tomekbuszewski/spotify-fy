/**
 * @author tomekbuszewski
 * @since 2020-04-10 08:55:04
 */

import styled from "styled-components";
import { BaseProps as Props } from "./Sidebar.types";
import { rem, withTransition } from "@ui/theme";

const StyledSidebar = styled.aside<Props>`
  ${withTransition("transform")};

  background: ${p => p.theme.colors.background};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;

  width: 100%;
  height: 100vh;
  max-width: ${rem(300)};
  transform: translateX(${p => (p.active ? "0" : "-100%")});

  ${p => p.theme.breakpoints.tablet} {
    position: static;
    transform: none;

    z-index: 1;
  }
`;

export { StyledSidebar };
