import * as React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import resources, { RESOURCE_TYPES } from "@config/resources";

import { Loader, TextFragment } from "@ui/Atoms";
import { Playlist as SongList } from "@ui/Organisms";

import {
  playlistAdd,
  playlistPrune,
  playlistPlay,
} from "@redux/playlist/actions";
import { playlistFactory } from "@redux/playlist/factories";
import {
  getCurrentPlaylist,
  getCurrentTrack,
  isPlaying,
} from "@redux/playlist/selectors";

import fetch, {
  RESOURCE_PROGRESS,
  RESOURCE_PROGRESS as PROGRESS,
} from "@services/fetch";
import { LISTING_PAGE } from "@translations/en";
import { PlaylistItem, PlaylistHeader } from "@ui/Molecules";

import { IReduxStore } from "@redux/reducers";
import { IArtist, IPlaylistTrack } from "@redux/playlist/typings";
import { ICategoryIcon } from "@ui/Molecules/CategoryIcon/CategoryIcon.types";

interface Props {
  songs: IPlaylistTrack[];
  isPlaying: boolean;
  current?: IPlaylistTrack;
  add: (songs: IPlaylistTrack[]) => void;
  play: (song?: string) => void;
  prune: () => void;
  resource: RESOURCE_TYPES;
}

interface IPlaylistInfo {
  artist?: string;
  cover: string;
  title: string;
}

interface IPlaylistInput {
  artists?: IArtist[];
  images: ICategoryIcon[];
  name: string;
}

const infoFactory = (input: IPlaylistInput): IPlaylistInfo => {
  const artist = input.artists
    ? input.artists.map(artist => artist.name).join(", ")
    : undefined;
  const title = input.name;
  const cover = input.images[0].url;

  return {
    artist,
    title,
    cover,
  };
};

const PlaylistView = (props: Props) => {
  const { resource } = useParams();
  const [info, setInfo] = React.useState<IPlaylistInfo>();
  const [fetchState, setFetchState] = React.useState<PROGRESS>(
    PROGRESS.LOADING,
  );
  const { tracks } = resources[props.resource];

  React.useEffect(() => {
    document.title = "Playlist";

    (async () => {
      try {
        const url = tracks.replace("{{id}}", resource as string);
        const data = await fetch(url);

        props.prune();
        props.add(playlistFactory(data.tracks.items));
        setFetchState(PROGRESS.LOADED);

        setInfo(infoFactory(data));
      } catch (e) {
        console.log(e);
        setFetchState(PROGRESS.ERROR);
      }
    })();

    return () => {
      setFetchState(PROGRESS.LOADING);
    };
  }, [resource]);

  if (fetchState === PROGRESS.ERROR) {
    return <TextFragment>Sorry</TextFragment>;
  }

  if (fetchState === PROGRESS.LOADING) {
    return <Loader full />;
  }

  if (props.songs && props.songs.length === 0) {
    return <TextFragment>{LISTING_PAGE.NO_CONTENT}</TextFragment>;
  }

  if (fetchState === RESOURCE_PROGRESS.LOADED) {
    return (
      <React.Fragment>
        {info?.title && <PlaylistHeader {...info} />}
        <SongList>
          {props.songs &&
            props.songs.map(item => (
              <PlaylistItem
                {...item}
                key={`${item.songId}`}
                active={
                  props.isPlaying && props.current?.songId === item.songId
                }
                onClick={() => props.play(item.songId)}
              />
            ))}
        </SongList>
      </React.Fragment>
    );
  }

  return null;
};

const mapState = ({ playlist }: IReduxStore) => ({
  isPlaying: isPlaying(playlist),
  songs: getCurrentPlaylist(playlist),
  current: getCurrentTrack(playlist),
});

const mapDispatch = {
  play: playlistPlay,
  add: playlistAdd,
  prune: playlistPrune,
};

const Playlist = connect(mapState, mapDispatch)(PlaylistView);

export { Playlist };
