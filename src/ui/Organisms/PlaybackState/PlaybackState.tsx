/**
 * @author tomekbuszewski
 * @since 2020-04-06 09:05:48
 */

import * as React from "react";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";

import {
  StyledCover,
  StyledPlaybackState,
  StyledWrapper,
  StyledSeekbarWrapper,
  CoverWrapper,
} from "./PlaybackState.styles";
import { BaseProps } from "./PlaybackState.types";

import { Button, PlayButton, TextFragment } from "@ui/Atoms";
import { TEXT_FRAGMENT_VARIANTS } from "@ui/Atoms/TextFragment/TextFragment.types";
import { SeekBar } from "@ui/Molecules";

import secondsToTime from "@services/secondsToTime";

interface PlaybackSteeringState {
  prev: () => void;
  next: () => void;
  play: () => void;
  stop: () => void;
  isPlaying?: boolean;
}

export interface Props
  extends BaseProps,
    IPlaylistTrack,
    PlaybackSteeringState {
  audio: HTMLAudioElement;
  position: number;
  positionChange?: (position: number) => void;
}

import { IPlaylistTrack } from "@redux/playlist/typings";

const PlaybackSteeringRaw = (props: PlaybackSteeringState) => {
  const handlePlay = () => {
    if (props.isPlaying) {
      props.stop();
    } else {
      props.play();
    }
  };

  return (
    <StyledWrapper centered>
      <Button onClick={props.prev && props.prev}>
        <IoIosSkipBackward />
      </Button>
      <PlayButton active={props.isPlaying || false} onClick={handlePlay} />
      <Button onClick={props.next && props.next}>
        <IoIosSkipForward />
      </Button>
    </StyledWrapper>
  );
};

const PlaybackSteering = React.memo(PlaybackSteeringRaw);

const PlaybackStateRaw = (props: Props) => {
  return (
    <React.Fragment>
      <StyledPlaybackState>
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
            <PlaybackSteering
              play={props.play}
              stop={props.stop}
              isPlaying={props.isPlaying}
              prev={props.prev}
              next={props.next}
            />
            <StyledWrapper centered>
              <TextFragment as="span">
                {secondsToTime(props.position)}
              </TextFragment>
              <SeekBar
                progress={props.position}
                duration={props.duration}
                onMouseUp={props.positionChange}
              />
              <TextFragment as="span">
                {secondsToTime(props.duration)}
              </TextFragment>
            </StyledWrapper>
          </StyledSeekbarWrapper>
        </React.Fragment>
      </StyledPlaybackState>
    </React.Fragment>
  );
};

const PlaybackState = React.memo(PlaybackStateRaw);

export { PlaybackState };
