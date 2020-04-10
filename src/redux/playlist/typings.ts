import ActionNameCreator from "@services/actionNameCreator";
import { ICategoryIcon } from "@ui/Molecules/CategoryIcon/CategoryIcon.types";

const action = new ActionNameCreator("playlist");

export const PLAYLIST_PLAY = action.get("play");
export const PLAYLIST_STOP = action.get("pause");
export const PLAYLIST_NEXT = action.get("next");
export const PLAYLIST_PREV = action.get("prev");
export const PLAYLIST_PRUNE = action.get("prune");
export const PLAYLIST_FINISHED = action.get("finished");
export const PLAYLIST_ADD = action.get("add tracks");

export interface IPlaylistItem {
  artist: string;
  title: string;
  duration: number;
}

export interface IPlaylistTrack extends IPlaylistItem {
  cover: string;
  audioSrc?: string;
  songId: string;
}

export interface IPlaylistReducer {
  isPlaying: boolean;
  current?: string;
  songs: IPlaylistTrack[];
}

interface IAlbum {
  name: string;
  images: ICategoryIcon[];
}

export interface IArtist {
  name: string;
}

export interface ITrack {
  id: string;
  album: IAlbum;
  artists: IArtist[];
  duration_ms: number;
  name: string;
  preview_url: string;
}
