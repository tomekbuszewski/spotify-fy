import * as React from "react";

import { PlaybackState } from "./";
import { IPlaylistItem } from "@ui/Molecules/PlaylistItem/PlaylistItem.types";

const song: IPlaylistItem = {
  artist: "Radiohead",
  title: "15 Step",
  duration: "200",
};

export const Normal = () => (
  <PlaybackState
    cover="https://rockmetalshop.pl/pol_pl_RADIOHEAD-IN-RAINBOWS-CD-176500_2.png"
    audioSrc="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
    {...song}
  />
);

export default {
  component: PlaybackState,
  title: "Organisms/PlaybackState",
};
