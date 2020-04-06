export interface BaseProps {
  children?: any;
}

export interface IPlaybackStateReducer {
  duration: number;
  isPlaying: boolean | null;
  position: number;
}

export enum PLAYBACK_STATE_ACTIONS {
  SET_DURATION,
  SET_POSITION,
  SET_PLAYBACK_STATE,
}