/**
 * @author tomekbuszewski
 * @since 2020-04-04 17:07:52
 */

import * as React from "react";

import { TestWrapper } from "@components/TestWrapper";

import {
  StyledPlaylistItem,
  StyledDuration,
  StyledPlayButton,
} from "./PlaylistItem.styles";
import {
  BaseProps,
  IPlaylistItem,
  MOLECULE_PLAYLIST_ITEM_TESTID as TEST_IDS,
} from "./PlaylistItem.types";

import { TEXT_FRAGMENT_VARIANTS } from "@ui/Atoms/TextFragment/TextFragment.types";
import { TextFragment } from "@ui/Atoms";

interface Props extends BaseProps, IPlaylistItem {}

const PlaylistItem = (props: Props) => (
  <TestWrapper testId={TEST_IDS.WRAPPER}>
    <StyledPlaylistItem active={props.active} onClick={props.onClick}>
      <TestWrapper testId={props.active ? TEST_IDS.PLAY_BUTTON_ACTIVE : TEST_IDS.PLAY_BUTTON}>
        <StyledPlayButton active={props.active} />
      </TestWrapper>
      <TestWrapper testId={TEST_IDS.TITLE}>
        <TextFragment
          highlight={props.active}
          variant={TEXT_FRAGMENT_VARIANTS.LARGE}
          as="h5"
        >
          {props.title}
        </TextFragment>
      </TestWrapper>
      <TestWrapper testId={TEST_IDS.ARTIST}>
        <TextFragment as="small">{props.artist}</TextFragment>
      </TestWrapper>
      <TestWrapper testId={TEST_IDS.DURATION}>
        <StyledDuration as="span">{props.duration}</StyledDuration>
      </TestWrapper>
    </StyledPlaylistItem>
  </TestWrapper>
);

export { PlaylistItem };
