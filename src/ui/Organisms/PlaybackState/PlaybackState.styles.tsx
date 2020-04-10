/**
 * @author tomekbuszewski
 * @since 2020-04-06 09:05:48
 */

import styled, { css } from "styled-components";
import { BaseProps as Props } from "./PlaybackState.types";

import { Image } from "@ui/Atoms";
import { rem } from "@ui/theme";

const StyledCover = styled(Image)`
  height: ${rem(40)};
  width: ${rem(40)};

  margin-right: ${rem(8)};

  ${p => p.theme.breakpoints.desktop} {
    height: ${rem(64)};
    width: ${rem(64)};
  }
`;

const StyledPlaybackState = styled.div<Props>`
  display: flex;
  flex-flow: row wrap;

  background: ${p => p.theme.colors.background};
  box-shadow: 0 0 ${rem(8)} ${rem(8)} rgba(0, 0, 0, 0.5);

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  padding: ${rem(4)};

  ${p =>
    p.theme.breakpoints.tablet &&
    css`
      padding: ${rem(8)};
    `}
`;

interface StyledWrapperProps {
  auto?: boolean;
  centered?: boolean;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  align-items: center;

  font-size: ${rem(12)};

  width: ${p => (p.auto ? "auto" : "100%")};

  ${p =>
    p.centered &&
    css`
      justify-content: center;
    `};
`;

const CoverWrapper = styled(StyledWrapper)`
  display: none;

  ${p => p.theme.breakpoints.tablet} {
    display: flex;
    width: 20%;
  }
`;

const StyledSeekbarWrapper = styled.div`
  width: 80%;
  margin: auto;

  ${p => p.theme.breakpoints.desktop} {
    width: 60%;
  }
`;

export {
  StyledPlaybackState,
  StyledCover,
  StyledWrapper,
  StyledSeekbarWrapper,
  CoverWrapper,
};
