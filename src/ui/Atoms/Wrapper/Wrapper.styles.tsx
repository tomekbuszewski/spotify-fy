/**
 * @author tomekbuszewski
 * @since 2020-04-10 11:30:13
 */

import styled from "styled-components";
import { BaseProps as Props } from "./Wrapper.types";

import {
  APP_HEADER_SIZE_DESKTOP,
  APP_HEADER_SIZE_MOBILE,
} from "@ui/Molecules/AppHeader/AppHeader.styles";

const StyledWrapper = styled.div<Props>`
  display: flex;
  flex-flow: row wrap;

  padding-top: ${APP_HEADER_SIZE_MOBILE};

  ${p => p.theme.breakpoints.desktop} {
    padding-top: ${APP_HEADER_SIZE_DESKTOP};
  }
`;

export { StyledWrapper };
