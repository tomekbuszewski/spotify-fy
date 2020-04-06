/**
 * @author tomekbuszewski
 * @since 2020-04-06 09:05:48
 */

import * as React from "react";
import { useCallbackRef } from "use-callback-ref";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";

import {
  StyledCover,
  StyledPlaybackState,
  StyledWrapper,
  StyledSeekbarWrapper,
  CoverWrapper,
} from "./PlaybackState.styles";
import { BaseProps } from "./PlaybackState.types";
import { IPlaylistItem } from "@ui/Molecules/PlaylistItem/PlaylistItem.types";

import reducer, { defaultState } from "./PlaybackState.state";
import { PLAYBACK_STATE_ACTIONS } from "./PlaybackState.types";

import { Button, PlayButton, TextFragment } from "@ui/Atoms";
import { TEXT_FRAGMENT_VARIANTS } from "@ui/Atoms/TextFragment/TextFragment.types";
import { SeekBar } from "@ui/Molecules";

import secondsToTime from "@services/secondsToTime";

export interface Props extends BaseProps, IPlaylistItem {
  cover: string;
  audioSrc?: string;
}

const setPosition = (position: string, audio: React.MutableRefObject<HTMLAudioElement | null>, dispatch: any) => {
  const { current } = audio;

  if (current) {
    current.currentTime = Number(position);
    dispatch({
      type: PLAYBACK_STATE_ACTIONS.SET_POSITION,
      payload: position,
    });
  }
};

const setPlayback = (isPlaying: boolean, audio: React.MutableRefObject<HTMLAudioElement | null>, dispatch: any) => {
  const { current } = audio;

  if (current) {
    if (isPlaying) {
      current.pause();
      dispatch({
        type: PLAYBACK_STATE_ACTIONS.SET_PLAYBACK_STATE,
        payload: false,
      });
    } else {
      current.play();
      dispatch({
        type: PLAYBACK_STATE_ACTIONS.SET_PLAYBACK_STATE,
        payload: true,
      });
    }
  }
};

const PlaybackState = (props: Props) => {
  const [audioData, dispatch] = React.useReducer(reducer, defaultState);
  const audio = useCallbackRef<HTMLAudioElement>(null, element => {
    if (element) {
      element.addEventListener("loadedmetadata", ({ target }) =>
        dispatch({
          type: PLAYBACK_STATE_ACTIONS.SET_DURATION,
          payload: (target as HTMLAudioElement).duration,
        }),
      );

      element.addEventListener("timeupdate", ({ target }) => {
        dispatch({
          type: PLAYBACK_STATE_ACTIONS.SET_POSITION,
          payload: (target as HTMLAudioElement).currentTime,
        });
      });
    }
  });

  return (
    <React.Fragment>
      <audio
        src={props.audioSrc}
        ref={audio}
        controls
        style={{ display: "none" }}
      />
      <StyledPlaybackState>
        {audio.current ? (
          <React.Fragment>
            <CoverWrapper auto>
              <StyledCover src={props.cover} title={props.title} />
              <div>
                <TextFragment variant={TEXT_FRAGMENT_VARIANTS.LARGE}>
                  {props.artist}
                </TextFragment>
                <TextFragment>{props.title}</TextFragment>
              </div>
            </CoverWrapper>
            <StyledSeekbarWrapper>
              <StyledWrapper centered>
                <Button>
                  <IoIosSkipBackward />
                </Button>
                <PlayButton
                  onClick={() => setPlayback(audioData.isPlaying, audio, dispatch)}
                  active={audioData.isPlaying || false}
                />
                <Button>
                  <IoIosSkipForward />
                </Button>
              </StyledWrapper>
              <StyledWrapper centered>
                <TextFragment as="span">
                  {secondsToTime(audioData.position)}
                </TextFragment>
                <SeekBar
                  progress={audioData.position}
                  duration={audioData.duration}
                  onMouseUp={({
                    currentTarget,
                  }: React.FormEvent<HTMLInputElement>) =>
                    setPosition(currentTarget.value, audio, dispatch)
                  }
                />
                <TextFragment as="span">
                  {secondsToTime(audioData.duration)}
                </TextFragment>
              </StyledWrapper>
            </StyledSeekbarWrapper>
          </React.Fragment>
        ) : (
          <div>Loading</div>
        )}
      </StyledPlaybackState>
    </React.Fragment>
  );
};

export { PlaybackState };
