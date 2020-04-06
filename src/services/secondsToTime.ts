const makeDoubleDigits = (input: number): string => {
  if (input >= 10) {
    return `${input}`;
  }

  return `0${input}`;
};

function secondsToTime(time: number): string {
  const MINUTE = 60;
  const HOUR = 3600;

  const HOURS = Math.floor(time / HOUR);
  const MINUTES = Math.floor((time % HOUR) / MINUTE);
  const SECONDS = Math.floor((time % HOUR) % MINUTE);

  if (HOURS) {
    return `${makeDoubleDigits(HOURS)}:${makeDoubleDigits(
      MINUTES,
    )}:${makeDoubleDigits(SECONDS)}`;
  }

  if (HOURS || MINUTES) {
    return `${makeDoubleDigits(MINUTES)}:${makeDoubleDigits(SECONDS)}`;
  }

  return `00:${makeDoubleDigits(SECONDS)}`;
}

export default secondsToTime;
