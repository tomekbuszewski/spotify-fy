/**
 * @author tomekbuszewski
 * @since 2020-04-04 17:39:36
 */

import * as React from "react";

import { TestWrapper } from "@components/TestWrapper";

import { StyledPlaylist } from "./Playlist.styles";
import {
  BaseProps,
  ORGANISM_PLAYLIST_TESTID as TEST_IDS,
} from "./Playlist.types";

const Playlist = (props: BaseProps) => (
  <TestWrapper testId={TEST_IDS.WRAPPER}>
    <StyledPlaylist>{props.children}</StyledPlaylist>
  </TestWrapper>
);

export { Playlist };
