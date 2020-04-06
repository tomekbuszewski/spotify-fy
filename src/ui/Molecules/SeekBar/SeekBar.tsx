/**
 * @author tomekbuszewski
 * @since 2020-04-06 06:18:00
 */

import * as React from "react";

import getPercentage from "@services/getPercentage";

import {
  StyledSeekBarProgress,
  StyledSeekBarInput,
  StyledSeekBarWrapper,
} from "./SeekBar.styles";
import { BaseProps } from "./SeekBar.types";

interface Props extends BaseProps {
  duration: number;
  start?: number;
  receiver?: (input: number) => void;
}

const SeekBar = (props: Props) => {
  const [currentPosition, setCurrentPosition] = React.useState<number>(
    props.start || 0,
  );

  return (
    <React.Fragment>
      <StyledSeekBarWrapper>
        <StyledSeekBarProgress
          progress={getPercentage(props.duration, currentPosition, true) as string}
        />
        <StyledSeekBarInput
          type="range"
          min={0}
          max={props.duration}
          defaultValue={currentPosition}
          onChange={e => {
            const value = Number(e.target.value);
            setCurrentPosition(value);

            if (props.receiver) {
              props.receiver(value);
            }
          }}
        />
      </StyledSeekBarWrapper>
    </React.Fragment>
  );
};

export { SeekBar };
