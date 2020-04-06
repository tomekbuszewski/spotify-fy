/**
 * @author tomekbuszewski
 * @since 2020-04-04 17:07:52
 */

import styled, { css } from "styled-components";

import { PlayButton } from "@ui/Atoms";
import { StyledTextFragment } from "@ui/Atoms/TextFragment/TextFragment.styles";
import { rem, withTransition } from "@ui/theme";

import { BaseProps as Props } from "./PlaylistItem.types";

const SPACING = rem(8);

const StyledPlaylistItem = styled.li<Props>`
  ${withTransition("background")};

  position: relative;
  list-style: none;

  padding: ${rem(12)} ${SPACING} ${rem(12)} ${rem(56)};
  
  &:hover {
    background: rgba(255, 255, 255, 0.075);
  }

  ${p =>
    p.active &&
    css`
      background: rgba(255, 255, 255, 0.15);
    `};
  
  ${p => p.theme.breakpoints.desktop && css`
    padding-left: ${rem(64)};
  `};
`;

const StyledDuration = styled(StyledTextFragment)`
  position: absolute;
  right: ${SPACING};
  top: 50%;
  transform: translateY(-50%);
`;

const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  left: ${SPACING};
  top: 50%;
  transform: translateY(-50%) scale(0.9);
  
  &:hover {
    transform: translateY(-50%);
  }
`;

export { StyledPlaylistItem, StyledDuration, StyledPlayButton };
