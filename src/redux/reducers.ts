import { combineReducers } from "redux";

import playlist, { IPlaylistReducer } from "./playlist/reducer";

export interface IReduxStore {
  playlist: IPlaylistReducer;
}

export const appReducers = {
  playlist,
};

export default combineReducers(appReducers);
