/**
* @author tomekbuszewski
* @since 2020-04-04 07:37:50
*/

import styled, { css } from "styled-components";
import { rem, withTransition } from "@ui/theme";

import { BaseProps as Props, BUTTON_VARIANTS } from "./Button.types";

const StyledButton = styled.button<Props>`
  ${withTransition(["opacity", "transform", "background", "color", "border"])};
  
  color: ${p => p.theme.colors.text};
  background: none;
  border: 0;
  outline: 0;
  border-radius: ${rem(24)};
  
  position: relative;
  
  font-size: ${rem(12)};
  
  opacity: 0.7;
  
  min-width: ${rem(24)};
  height: ${rem(24)};
  margin-bottom: ${rem(12)};
  
  text-align: center;
  
  ${p => p.variant === BUTTON_VARIANTS.CTA && css`
    padding: ${rem(8)} ${rem(16)};
    
    background: ${p => p.theme.colors.brand};
    
    font-size: ${rem(16)};
    text-transform: uppercase;
    
    height: auto;
    
    ${p => p.theme.breakpoints.desktop} {
      padding-right: ${rem(24)};
      padding-left: ${rem(24)};
    }
`};
  
  &:hover {
    opacity: 1;
  }
  
  &:active, &:focus {
    outline: 0;
  }
  
  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { StyledButton }
