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

export function getSeeked(timelineAction, playing) {
  switch (timelineAction.action) {
    case 'seek': {
      if (!playing) return timelineAction.seeked;
      const date1 = new Date(timelineAction.updatedAt);
      const date2 = new Date();
      const diffTime = Math.abs(date2 - date1);
      const diffSeconds = Math.floor(diffTime / 1000);
      return parseFloat(timelineAction.seeked) + diffSeconds;
    }

    case 'play': {
      if (!playing) return timelineAction.seeked;
      const date1 = new Date(timelineAction.updatedAt);
      const date2 = new Date();
      const diffTime = Math.abs(date2 - date1);
      const diffSeconds = Math.floor(diffTime / 1000);
      return parseFloat(timelineAction.seeked) + diffSeconds;
    }

    case 'pause': {
      return timelineAction.seeked;
    }

    default:
      return '0';
  }
}
