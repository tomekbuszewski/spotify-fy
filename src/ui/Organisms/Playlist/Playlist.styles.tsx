/**
 * @author tomekbuszewski
 * @since 2020-04-04 17:39:36
 */

import styled from "styled-components";
import { BaseProps as Props } from "./Playlist.types";
import { rem } from "@ui/theme";

const StyledPlaylist = styled.ul<Props>`
  list-style: none;
  margin: 0 auto;
  padding: 0 0 ${rem(60)};

  ${p => p.theme.breakpoints.desktop} {
    padding-bottom: ${rem(100)};
  }
`;

export { StyledPlaylist };
