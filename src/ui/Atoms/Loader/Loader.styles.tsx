/**
 * @author tomekbuszewski
 * @since 2020-04-07 16:07:32
 */

import styled, { keyframes } from "styled-components";
import { BaseProps as Props } from "./Loader.types";
import { rem } from "@ui/theme";

const loader = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 ${rem(16)} 0 -${rem(8)};
  }
  40% {
    box-shadow: 0 ${rem(16)} 0 0;
  }
`;

const StyledLoader = styled.span<Props>`
  border-radius: 50%;
  color: ${p => p.theme.colors.text};

  opacity: 0.7;

  display: block;
  margin: -${rem(16)} auto ${rem(16)};

  position: relative;
  text-indent: -${rem(1000)};

  animation: ${loader} 1.5s -150ms infinite ease-in-out both;

  width: ${rem(16)};
  height: ${rem(16)};

  &:before,
  &:after {
    color: currentColor;
    border-radius: 50%;

    top: 0;
    content: "";
    position: absolute;

    display: block;

    width: ${rem(16)};
    height: ${rem(16)};
  }

  &:before {
    left: -${rem(24)};
    animation: ${loader} 1.5s -300ms infinite ease-in-out both;
  }

  &:after {
    left: ${rem(24)};
    animation: ${loader} 1.5s infinite ease-in-out both;
  }
`;

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  background: rgba(0, 0, 0, 0.75);

  display: grid;
  place-items: center;
`;

export { StyledLoader, StyledWrapper };
