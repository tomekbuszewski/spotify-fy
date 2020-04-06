export interface BaseProps {
  active?: boolean;
  children?: any;
  onClick?: () => any;
}

export interface IPlaylistItem {
  artist: string;
  title: string;
  duration: string;
}

export enum MOLECULE_PLAYLIST_ITEM_TESTID {
  WRAPPER = "molecule-playlist-item-wrapper",
  PLAY_BUTTON = "molecule-playlist-item-play-button",
  PLAY_BUTTON_ACTIVE = "molecule-playlist-item-play-button-active",
  ARTIST = "molecule-playlist-item-artist",
  TITLE = "molecule-playlist-item-title",
  DURATION = "molecule-playlist-item-duration",
}
