/**
 * @author tomekbuszewski
 * @since 2020-04-04 17:39:36
 */

import styled from "styled-components";
import { BaseProps as Props } from "./Playlist.types";

const StyledPlaylist = styled.ul<Props>`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export { StyledPlaylist };
