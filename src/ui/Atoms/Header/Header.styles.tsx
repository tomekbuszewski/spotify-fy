/**
 * @author tomekbuszewski
 * @since 2020-04-04 16:47:14
 */

import styled, { css } from "styled-components";
import { BaseProps as Props, HEADER_VARIANT } from "./Header.types";
import { rem } from "@ui/theme";

const StyledHeader = styled.h3<Props>`
  ${p =>
    p.variant === HEADER_VARIANT.NORMAL &&
    css`
      font-weight: normal;
      text-transform: uppercase;
      opacity: 0.7;
      font-size: ${rem(12)};
    `};

  ${p =>
    p.variant === HEADER_VARIANT.LARGE &&
    css`
      font-weight: bold;
      font-size: ${rem(24)};
    `};
`;

export { StyledHeader };
