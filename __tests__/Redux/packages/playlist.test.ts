import { Store } from "redux";

import { ReduxThunkDispatch } from "@redux/types";

import { getCurrentTrackId } from "@redux/playlist/selectors";
import { playlistFactory, trackFactory } from "@redux/playlist/factories";
import {
  playlistStop,
  playlistPrune,
  playlistPrev,
  playlistPlay,
  playlistNext,
  playlistFinished,
  playlistAdd,
} from "@redux/playlist/actions";

import { makeStore } from "@redux/store";

import data from "../../../__mocks__/playlistData";

describe("`Playlists` redux tests", () => {
  const playlist = playlistFactory(data);

  const testSong = {
    artist: data[0].track.artists.map(item => item.name).join(", "),
    cover: data[0].track.album.images[0].url,
    title: data[0].track.name,
    duration: data[0].track.duration_ms / 1000,
    audioSrc: data[0].track.preview_url,
    songId: data[0].track.id,
  };

  let store: Store;
  let dispatch: ReduxThunkDispatch;

  beforeEach(() => {
    store = makeStore();
    dispatch = store.dispatch;
  });

  it("should initialize with proper store shape", () => {
    expect(store.getState().playlist).toMatchObject({
      isPlaying: false,
      songs: [],
    });
  });

  it("should properly format received items", () => {
    // @ts-ignore
    expect(trackFactory(data[0].track)).toMatchObject(testSong);
  });

  it("should properly create playlists in expected shape", () => {
    expect(playlist.length).toBe(data.length);
    expect(playlist[0]).toMatchObject(testSong);
  });

  it("should properly add songs into playlist", () => {
    dispatch(playlistAdd(playlist));

    expect(store.getState().playlist.songs.length).toBe(data.length);
    expect(store.getState().playlist.songs[0]).toMatchObject(testSong);
  });

  it("should properly set playback state to play", () => {
    dispatch(playlistAdd(playlist));
    dispatch(playlistPlay());

    expect(store.getState().playlist.isPlaying).toBeTruthy();
    expect(store.getState().playlist.current).toBe(playlist[0].songId);
  });

  it("should properly set playback state to pause", () => {
    dispatch(playlistAdd(playlist));
    dispatch(playlistPlay());

    expect(store.getState().playlist.isPlaying).toBeTruthy();
    expect(store.getState().playlist.current).toBe(playlist[0].songId);

    dispatch(playlistStop());

    expect(store.getState().playlist.isPlaying).toBeFalsy();
    expect(store.getState().playlist.current).toBe(playlist[0].songId);
  });

  it("should properly retrieve song index id", () => {
    dispatch(playlistAdd(playlist));
    expect(
      getCurrentTrackId(store.getState().playlist, playlist[0].songId),
    ).toEqual(0);
  });

  it("should properly jump to next track", () => {
    dispatch(playlistAdd(playlist));

    dispatch(playlistNext());

    expect(store.getState().playlist.current).toBe(playlist[1].songId);
  });

  it("should properly jump to previous track", () => {
    dispatch(playlistAdd(playlist));
    dispatch(playlistNext());

    expect(store.getState().playlist.current).toBe(playlist[1].songId);

    dispatch(playlistPrev());

    expect(store.getState().playlist.current).toBe(playlist[0].songId);
  });

  it("should load first track when jumping to previous from the beginning", () => {
    dispatch(playlistAdd(playlist));

    expect(store.getState().playlist.current).toBeUndefined();

    dispatch(playlistPrev());

    expect(store.getState().playlist.current).toBe(playlist[0].songId);
  });

  it("should properly prune the playlist", () => {
    dispatch(playlistAdd(playlist));

    expect(store.getState().playlist.songs.length).toBe(playlist.length);

    dispatch(playlistPrune());

    expect(store.getState().playlist.songs.length).toBe(0);
    expect(store.getState().playlist.isPlaying).toBeFalsy();
    expect(store.getState().playlist.current).toBeUndefined();
  });

  it("should properly get back to the beginning on finish", () => {
    dispatch(playlistAdd(playlist));
    dispatch(playlistPlay());
    dispatch(playlistNext());

    expect(store.getState().playlist.isPlaying).toBeTruthy();
    expect(store.getState().playlist.current).toBe(playlist[1].songId);

    dispatch(playlistFinished());

    expect(store.getState().playlist.isPlaying).toBeFalsy();
    expect(store.getState().playlist.current).toBe(playlist[0].songId);
  });
});
