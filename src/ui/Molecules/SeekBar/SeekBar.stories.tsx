import * as React from "react";

import secondsToTime from "@services/secondsToTime";
import getPercentage from "@services/getPercentage";

import { SeekBar } from "./";

export const Normal = () => (
  <SeekBar duration={500} />
);

export const WithStartPosition = () => (
  <SeekBar duration={500} start={200} />
);

export const WithVisibleData = () => {
  const [current, setCurrent] = React.useState<number>(0);
  const DURATION = 180;

  return (
    <React.Fragment>
      <p>Current position in seconds: {current}</p>
      <p>Current position in percentage: {Math.round((getPercentage(DURATION, current) as number + Number.EPSILON) * 100) / 100}%</p>
      <p>Current position in minutes: {secondsToTime(current)}</p>
      <SeekBar duration={DURATION} receiver={setCurrent} />
    </React.Fragment>
  )
};

export default {
  component: SeekBar,
  title: "Molecules/SeekBar",
}
