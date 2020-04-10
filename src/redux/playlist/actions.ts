import { Action, AnyAction } from "redux";

import {
  PLAYLIST_PRUNE,
  PLAYLIST_PREV,
  PLAYLIST_STOP,
  PLAYLIST_PLAY,
  PLAYLIST_ADD,
  PLAYLIST_FINISHED,
  PLAYLIST_NEXT,
  IPlaylistTrack,
} from "@redux/playlist/typings";

const playlistPlay = (payload?: string): AnyAction => ({
  type: PLAYLIST_PLAY,
  payload,
});
const playlistStop = (): Action => ({ type: PLAYLIST_STOP });
const playlistNext = (): Action => ({ type: PLAYLIST_NEXT });
const playlistPrev = (): Action => ({ type: PLAYLIST_PREV });
const playlistPrune = (): Action => ({ type: PLAYLIST_PRUNE });
const playlistFinished = (): Action => ({ type: PLAYLIST_FINISHED });
const playlistAdd = (payload: IPlaylistTrack[]): AnyAction => ({
  type: PLAYLIST_ADD,
  payload,
});

export {
  playlistAdd,
  playlistFinished,
  playlistNext,
  playlistPlay,
  playlistPrev,
  playlistPrune,
  playlistStop,
};
