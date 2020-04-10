/**
 * @author tomekbuszewski
 * @since 2020-04-09 14:42:36
 */

import * as React from "react";

import {
  StyledPlaylistHeader,
  StyledInfoContainer,
  StyledCover,
} from "./PlaylistHeader.styles";
import { Header } from "@ui/Atoms";
import { HEADER_VARIANT } from "@ui/Atoms/Header/Header.types";

interface Props {
  artist?: string;
  title: string;
  cover: string;
}

const PlaylistHeader = (props: Props) => (
  <StyledPlaylistHeader>
    <StyledCover src={props.cover} title={props.title} />
    <StyledInfoContainer>
      <Header variant={HEADER_VARIANT.LARGE}>{props.title}</Header>
      {props.artist && (
        <Header variant={HEADER_VARIANT.NORMAL}>{props.artist}</Header>
      )}
    </StyledInfoContainer>
  </StyledPlaylistHeader>
);

export { PlaylistHeader };
