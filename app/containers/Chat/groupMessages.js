import { isMatchingTypes } from './isMatchingTypes';

const lastItemInList = list => (list.length ? list[list.length - 1] : null);

export const groupMessages = messages => {
  const grouped = [];

  for (let i = 0; i < messages.length; i += 1) {
    const currMessage = messages[i];
    const lastGrouped = lastItemInList(grouped);
    const lastMessage = lastGrouped
      ? lastItemInList(lastGrouped.messages)
      : null;

    const isMatching = isMatchingTypes(currMessage, lastMessage);

    if (isMatching) {
      grouped[grouped.length - 1].messages.push(currMessage);
    } else {
      grouped.push({
        messages: [currMessage],
      });
    }
  }

  return grouped;
};
