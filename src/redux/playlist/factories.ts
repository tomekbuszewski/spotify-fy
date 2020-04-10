import { IPlaylistTrack, ITrack } from "@redux/playlist/typings";

function trackFactory(input: ITrack): IPlaylistTrack {
  const artist = input.artists
    ? input.artists.map(artist => artist.name).join(", ")
    : "No Name";
  const cover = input.album?.images[0]?.url;
  const title = input.name;
  const duration = input.duration_ms / 1000;
  const audioSrc = input.preview_url;
  const songId = input.id;

  return {
    artist,
    cover,
    title,
    duration,
    audioSrc,
    songId,
  };
}

function playlistFactory(input: { track: ITrack }[]): IPlaylistTrack[] {
  return input.map(el => trackFactory(el.track || el));
}

export { trackFactory, playlistFactory };
