import { AnyAction } from "redux";

import {
  PLAYLIST_NEXT,
  PLAYLIST_FINISHED,
  PLAYLIST_ADD,
  PLAYLIST_PLAY,
  PLAYLIST_STOP,
  PLAYLIST_PREV,
  PLAYLIST_PRUNE,
  IPlaylistReducer,
} from "./typings";
import { getCurrentTrackId } from "./selectors";

const initialState: IPlaylistReducer = {
  isPlaying: false,
  songs: [],
};

function reducer(
  state: IPlaylistReducer = initialState,
  action: AnyAction,
): IPlaylistReducer {
  const { type, payload } = action;

  switch (type) {
    case PLAYLIST_PLAY: {
      let current;

      if (payload) {
        current = payload;
      } else {
        current = state.current ? state.current : state.songs[0].songId;
      }

      return {
        ...state,
        current,
        isPlaying: true,
      };
    }

    case PLAYLIST_STOP: {
      return {
        ...state,
        isPlaying: false,
      };
    }

    case PLAYLIST_PRUNE: {
      const newStore = {
        ...state,
        isPlaying: false,
        songs: [],
      };

      delete newStore.current;

      return newStore;
    }

    case PLAYLIST_ADD: {
      return {
        ...state,
        isPlaying: false,
        songs: payload,
      };
    }

    case PLAYLIST_PREV: {
      if (state.current) {
        const currentSong = getCurrentTrackId(state, state.current);
        const prevIndex = currentSong === 0 ? currentSong : currentSong - 1;

        return {
          ...state,
          current: state.songs[prevIndex].songId,
        };
      }

      return {
        ...state,
        current: state.songs[0].songId,
      };
    }

    case PLAYLIST_NEXT: {
      const currentSong = state.current
        ? getCurrentTrackId(state, state.current)
        : 0;
      const nextIndex =
        currentSong === state.songs.length ? 0 : currentSong + 1;

      return {
        ...state,
        current: state.songs[nextIndex].songId,
      };
    }

    case PLAYLIST_FINISHED: {
      return {
        ...state,
        isPlaying: false,
        current: state.songs[0].songId,
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
