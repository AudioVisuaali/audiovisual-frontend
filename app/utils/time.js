export function doublePrecision(number) {
  return `0${number}`.slice(-2);
}

export function secondsToClockFormat(seconds) {
  const secondsInt = Math.floor(parseFloat(seconds));
  const minutesInt = Math.floor(secondsInt / 60);
  const hours = Math.floor(minutesInt / 60);
  const leftOverSeconds = secondsInt % 60;
  const leftOverMinutes = minutesInt % 60;
  return { seconds: leftOverSeconds, minutes: leftOverMinutes, hours };
}

export function formatToReadable({ hours, minutes, seconds }) {
  const dp = doublePrecision;
  return `${hours ? `${dp(hours)}:` : ''}${dp(minutes)}:${dp(seconds)}`;
}

export function dateToDoublePercision(date) {
  const time = typeof date === 'string' ? new Date(date) : date;

  return `${doublePrecision(time.getHours())}:${doublePrecision(
    time.getMinutes(),
  )}`;
}

export function getSeeked(timelineAction, offset = 0) {
  const { seeked, updatedAt, playing } = timelineAction;
  let totalTime = seeked;

  // If video is playing we need to calculate time from start to now
  if (playing) {
    const date1 = new Date(updatedAt);
    const date2 = new Date(Date.now() + offset);
    const diffTime = Math.abs(date2 - date1); // ? TODO
    const diffSeconds = diffTime / 1000;

    totalTime += diffSeconds;
  }

  return totalTime;
}
