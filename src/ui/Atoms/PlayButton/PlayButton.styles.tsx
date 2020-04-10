/**
 * @author tomekbuszewski
 * @since 2020-04-03 15:16:18
 */

import styled, { css } from "styled-components";

import { rem } from "@ui/theme";
import { StyledButton } from "@ui/Atoms/Button/Button.styles";

import { BaseProps as Props } from "./PlayButton.types";

const StyledPlayButton = styled(StyledButton)<Props>`
  border: ${rem(1)} solid;

  font-size: ${rem(16)};

  border-radius: 100%;
  width: ${rem(36)};
  height: ${rem(36)};
  
  transform: scale(0.9);

  ${p =>
    p.active &&
    css`
      background: ${p => p.theme.colors.brand};
      border-color: ${p => p.theme.colors.brand};

      opacity: 1;
    `};

  &:hover {
    opacity: 1;
    transform: scale(1);
  }

  ${p => p.theme.breakpoints.desktop} {
    width: ${rem(48)};
    height: ${rem(48)};
    
    font-size: ${rem(24)};
  }
`;

export { StyledPlayButton };
