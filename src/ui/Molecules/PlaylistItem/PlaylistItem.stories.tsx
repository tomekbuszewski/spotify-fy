import * as React from "react";

import { boolean, text } from "@storybook/addon-knobs";

import { PlaylistItem } from "./";

export interface IPlaylistItemConfig {
  active?: boolean;
  artist?: string;
  title?: string;
  duration?: number;
}

export const Normal = (
  /* istanbul ignore next */ props: IPlaylistItemConfig = {},
) => (
  <PlaylistItem
    active={props.active || boolean("Is playing", false)}
    artist={props.artist || text("Artist", "Neil Young")}
    title={props.title || text("Song Title", "Southern Man – 2009 Remaster")}
    duration={props.duration || 500}
  />
);

export default {
  component: PlaylistItem,
  title: "Molecules/PlaylistItem",
};
