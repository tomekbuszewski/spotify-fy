import * as React from "react";

import { Playlist } from "./";
import { IPlaylistItem } from "@ui/Molecules/PlaylistItem/PlaylistItem.types";

const ITEMS: IPlaylistItem[] = [
  {
    artist: "Neil Young",
    title: "Tell Me Why",
    duration: "2:57",
  },
  {
    artist: "Neil Young",
    title: "After the Gold Rush",
    duration: "3:45",
  },
  {
    artist: "Neil Young",
    title: "Only Love Can Break Your Heart",
    duration: "3:08",
  },
  {
    artist: "Neil Young",
    title: "Southern Man",
    duration: "5:31",
  },
  {
    artist: "Neil Young",
    title: "Till the Morning Comes",
    duration: "1:16",
  },
  {
    artist: "Neil Young",
    title: "Oh, Lonesome Me",
    duration: "3:48",
  },
  {
    artist: "Neil Young",
    title: "Don't Let it Bring You Down",
    duration: "2:56",
  },
  {
    artist: "Neil Young",
    title: "Birds",
    duration: "2:33",
  },
  {
    artist: "Neil Young",
    title: "When You Dance I Can Really Love",
    duration: "3:45",
  },
  {
    artist: "Neil Young",
    title: "I Believe in You",
    duration: "3:27",
  },
  {
    artist: "Neil Young",
    title: "Cripple Creek Ferry",
    duration: "1:33",
  },
];

export const Normal = ({ items = ITEMS }: { items: IPlaylistItem[] }) => (
  <Playlist items={items} />
);

export default {
  component: Playlist,
  title: "Organisms/Playlist",
};
