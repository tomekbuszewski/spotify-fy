/**
 * @author tomekbuszewski
 * @since 2020-04-04 16:57:32
 */

import styled, { css } from "styled-components";
import {
  BaseProps as Props,
  TEXT_FRAGMENT_VARIANTS,
} from "./TextFragment.types";

import { rem, withTransition } from "@ui/theme";

const StyledTextFragment = styled.p<Props>`
  ${withTransition("color")};

  font-family: ${p => p.theme.fonts.faces.secondary};
  font-size: ${rem(12)};

  color: ${p => (p.highlight ? p.theme.colors.brand : p.theme.colors.text)};

  opacity: 0.7;

  margin: 0;
  padding: 0;

  ${p =>
    p.variant === TEXT_FRAGMENT_VARIANTS.LARGE &&
    css`
      width: 100%;

      max-width: ${rem(200)};
      text-overflow: ellipsis;
      display: block;
      white-space: nowrap;
      overflow: hidden;

      font-size: ${rem(16)};
      font-weight: normal;
      
      opacity: 1;
      
      ${p => p.theme.breakpoints.tablet} {
        max-width: ${rem(300)};
      }
    `};
`;

export { StyledTextFragment };
