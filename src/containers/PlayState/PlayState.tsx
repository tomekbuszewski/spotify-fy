import * as React from "react";
import { connect } from "react-redux";
import { useCallbackRef } from "use-callback-ref";

import {
  playlistPlay,
  playlistNext,
  playlistStop,
  playlistPrev,
} from "@redux/playlist/actions";
import { getCurrentTrack, isPlaying } from "@redux/playlist/selectors";
import { IReduxStore } from "@redux/reducers";
import { IPlaylistTrack } from "@redux/playlist/typings";

import { PlaybackState } from "@ui/Organisms";

interface Props {
  song: IPlaylistTrack | undefined;
  stop: () => void;
  play: () => void;
  next: () => void;
  prev: () => void;
  isPlaying: boolean;
}

const PlayStateContainer = (props: Props) => {
  const [position, setPosition] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);

  const audio = useCallbackRef<HTMLAudioElement>(null, current => {
    if (current) {
      current.oncanplay = () => setDuration(current.duration);
      current.ontimeupdate = () => setPosition(current.currentTime);
      current.onended = () => props.next();
    }
  });

  const { isPlaying, song } = props;
  const { current } = audio;

  React.useEffect(() => {
    if (current) {
      if (isPlaying) {
        current.play();
      } else {
        current.pause();
      }
    }
  }, [song?.songId, isPlaying]);

  return (
    <React.Fragment>
      <audio src={song?.audioSrc} ref={audio} />
      {song && audio && (
        <PlaybackState
          {...song}
          isPlaying={isPlaying}
          prev={props.prev}
          next={props.next}
          audio={audio as any}
          position={position}
          play={props.play}
          stop={props.stop}
          duration={duration}
          positionChange={setPosition}
        />
      )}
    </React.Fragment>
  );
};

const mapState = ({ playlist }: IReduxStore) => ({
  isPlaying: isPlaying(playlist),
  song: getCurrentTrack(playlist),
});

const mapDispatch = {
  stop: playlistStop,
  play: playlistPlay,
  next: playlistNext,
  prev: playlistPrev,
};

const PlayState = connect(mapState, mapDispatch)(PlayStateContainer);

export { PlayState };
