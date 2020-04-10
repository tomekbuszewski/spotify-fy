import * as React from "react";

import { Playlist } from "./";
import { PlaylistItem } from "@ui/Molecules";
import { IPlaylistItem } from "@redux/playlist/typings";

export const ITEMS: IPlaylistItem[] = [
  {
    artist: "Neil Young",
    title: "Tell Me Why",
    duration: 123,
  },
  {
    artist: "Neil Young",
    title: "After the Gold Rush",
    duration: 123,
  },
  {
    artist: "Neil Young",
    title: "Only Love Can Break Your Heart",
    duration: 123,
  },
  {
    artist: "Neil Young",
    title: "Southern Man",
    duration: 123,
  },
  {
    artist: "Neil Young",
    title: "Till the Morning Comes",
    duration: 123,
  },
  {
    artist: "Neil Young",
    title: "Oh, Lonesome Me",
    duration: 123,
  },
  {
    artist: "Neil Young",
    title: "Don't Let it Bring You Down",
    duration: 123,
  },
  {
    artist: "Neil Young",
    title: "Birds",
    duration: 123,
  },
  {
    artist: "Neil Young",
    title: "When You Dance I Can Really Love",
    duration: 123,
  },
  {
    artist: "Neil Young",
    title: "I Believe in You",
    duration: 123,
  },
  {
    artist: "Neil Young",
    title: "Cripple Creek Ferry",
    duration: 123,
  },
];

export const SingleSong = () => (
  <Playlist>
    <PlaylistItem {...ITEMS[0]} />
  </Playlist>
);

export const Normal = () => (
  <Playlist>
    {ITEMS.map(item => (
      <PlaylistItem {...item} key={item.title} />
    ))}
  </Playlist>
);

export default {
  component: Playlist,
  title: "Organisms/Playlist",
};
