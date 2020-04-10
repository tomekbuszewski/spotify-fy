/**
 * @author tomekbuszewski
 * @since 2020-04-10 11:28:38
 */

import styled from "styled-components";
import { BaseProps as Props } from "./AppHeader.types";
import { rem } from "@ui/theme";

export const APP_HEADER_SIZE_MOBILE = rem(40);
export const APP_HEADER_SIZE_DESKTOP = rem(64);

const StyledAppHeader = styled.header<Props>`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;

  width: 100vw;
  height: ${APP_HEADER_SIZE_MOBILE};

  background: ${p => p.theme.colors.background};
  z-index: 100;

  ${p => p.theme.breakpoints.desktop} {
    height: ${APP_HEADER_SIZE_DESKTOP};
  }
`;

const StyledToggle = styled.button`
  border: 0;
  background: none;
  color: ${p => p.theme.colors.text};

  position: absolute;
  top: 50%;
  right: ${rem(8)};
  transform: translateY(-50%);

  font-weight: bold;
  font-size: ${rem(16)};

  &:active,
  &:focus {
    outline: 0;
  }

  ${p => p.theme.breakpoints.desktop} {
    display: none;
  }
`;

const StyledTitle = styled.h1`
  color: ${p => p.theme.colors.text};

  font-weight: bold;
  font-size: ${rem(16)};
  line-height: ${APP_HEADER_SIZE_MOBILE};
  text-align: center;

  margin: 0;
  padding: 0 0 0 ${rem(8)};

  ${p => p.theme.breakpoints.desktop} {
    font-size: ${rem(24)};
    line-height: ${APP_HEADER_SIZE_DESKTOP};
    padding: 0 0 0 ${rem(16)};
  }
`;

export { StyledAppHeader, StyledToggle, StyledTitle };
