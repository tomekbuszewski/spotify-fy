export const CATEGORIES = "browse/categories";
export const PLAYLISTS = "browse/categories/{{id}}/playlists";
export const PLAYLIST_TRACKS = "playlists/{{id}}";
export const NEW_RELEASES = "browse/new-releases";
export const ALBUM_TRACKS = "albums/{{id}}";
export const ME = "me";
export const USER_PLAYLISTS = "users/{{id}}/playlists";

export enum RESOURCE_TYPES {
  CATEGORIES = "categories",
  PLAYLISTS = "playlists",
  ALBUMS = "albums",
}

export default {
  [RESOURCE_TYPES.CATEGORIES]: {
    url: CATEGORIES,
    id: "categories",
    link: "category",
    tracks: "",
  },
  [RESOURCE_TYPES.PLAYLISTS]: {
    url: PLAYLISTS,
    id: "playlists",
    link: "playlist",
    tracks: PLAYLIST_TRACKS,
  },
  [RESOURCE_TYPES.ALBUMS]: {
    url: NEW_RELEASES,
    id: "albums",
    link: "album",
    tracks: ALBUM_TRACKS,
  },
};
