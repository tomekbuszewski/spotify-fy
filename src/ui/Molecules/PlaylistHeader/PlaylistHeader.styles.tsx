/**
 * @author tomekbuszewski
 * @since 2020-04-09 14:42:36
 */

import styled from "styled-components";
import { rem } from "@ui/theme";
import { BaseProps as Props } from "./PlaylistHeader.types";

import { Image } from "@ui/Atoms";

const StyledInfoContainer = styled.div`
  padding: ${rem(16)};

  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const StyledCover = styled(Image)`
  width: ${rem(80)};
  height: ${rem(80)};

  ${p => p.theme.breakpoints.tablet} {
    width: ${rem(192)};
    height: ${rem(192)};
  }
`;

const StyledPlaylistHeader = styled.header<Props>`
  width: 100%;
  display: flex;

  padding: ${rem(8)};

  background: linear-gradient(
    to bottom,
    hsl(0, 0%, 16%) 0%,
    hsl(0, 0%, 15.92%) 8.1%,
    hsl(0, 0%, 15.68%) 15.5%,
    hsl(0, 0%, 15.31%) 22.5%,
    hsl(0, 0%, 14.82%) 29%,
    hsl(0, 0%, 14.22%) 35.3%,
    hsl(0, 0%, 13.53%) 41.2%,
    hsl(0, 0%, 12.76%) 47.1%,
    hsl(0, 0%, 11.92%) 52.9%,
    hsl(0, 0%, 11.04%) 58.8%,
    hsl(0, 0%, 10.13%) 64.7%,
    hsl(0, 0%, 9.24%) 71%,
    hsl(0, 0%, 8.4%) 77.5%,
    hsl(0, 0%, 7.68%) 84.5%,
    hsl(0, 0%, 7.19%) 91.9%,
    hsl(0, 0%, 7%) 100%
  );

  ${p => p.theme.breakpoints.tablet} {
    padding: ${rem(16)};
  }
`;

export { StyledPlaylistHeader, StyledInfoContainer, StyledCover };
