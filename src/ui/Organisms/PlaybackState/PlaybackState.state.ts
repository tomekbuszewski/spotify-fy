import {
  IPlaybackStateReducer,
  PLAYBACK_STATE_ACTIONS,
} from "./PlaybackState.types";

export const defaultState: IPlaybackStateReducer = {
  duration: 0,
  position: 0,
  isPlaying: null,
};

function playbackStateReducer(
  state: IPlaybackStateReducer = defaultState,
  action: { type: PLAYBACK_STATE_ACTIONS; payload: any },
) {
  const { type, payload } = action;

  switch (type) {
    case PLAYBACK_STATE_ACTIONS.SET_DURATION: {
      return {
        ...state,
        duration: payload,
      };
    }

    case PLAYBACK_STATE_ACTIONS.SET_PLAYBACK_STATE: {
      return {
        ...state,
        isPlaying: payload !== null ? payload : !state.isPlaying,
      };
    }

    case PLAYBACK_STATE_ACTIONS.SET_POSITION: {
      return {
        ...state,
        position: payload,
      };
    }

    default: {
      return defaultState;
    }
  }
}

export default playbackStateReducer;
