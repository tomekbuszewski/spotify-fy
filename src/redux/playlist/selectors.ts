import { IPlaylistReducer, IPlaylistTrack } from "@redux/playlist/typings";

const isPlaying = (playlist: IPlaylistReducer) => playlist.isPlaying;

const getCurrentTrack = (playlist: IPlaylistReducer) => {
  const { current, songs } = playlist;

  return songs.find(song => song.songId === current);
};

const getCurrentTrackId = (playlist: IPlaylistReducer, track: string) => {
  return playlist.songs.findIndex(
    (song: IPlaylistTrack) => song.songId === track,
  );
};

const getCurrentPlaylist = (playlist: IPlaylistReducer) => playlist.songs;

export { isPlaying, getCurrentTrack, getCurrentTrackId, getCurrentPlaylist };
