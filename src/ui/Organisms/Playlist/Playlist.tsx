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

import { PlaylistItem } from "@ui/Molecules";
import { IPlaylistItem } from "@ui/Molecules/PlaylistItem/PlaylistItem.types";

interface Props extends BaseProps {
  items: IPlaylistItem[];
}

const Playlist = (props: Props) => (
  <TestWrapper testId={TEST_IDS.WRAPPER}>
    <StyledPlaylist>
      {props.items.map(item => (
        <PlaylistItem
          {...item}
          key={`${item.artist} ${item.title}`}
          onClick={() => alert("ASD")}
        />
      ))}
    </StyledPlaylist>
  </TestWrapper>
);

export { Playlist };
