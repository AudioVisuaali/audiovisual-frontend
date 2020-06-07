export const groupMessages = messages => {
  const grouped = [];
  messages.forEach((message, index) => {
    if (index === 0) {
      grouped.push({
        ...message,
        contents: [message.content],
      });
      return;
    }

    const latestGrouped = grouped[grouped.length - 1];
    if (
      message.type === latestGrouped.type &&
      message.user.unique === latestGrouped.user.unique
    ) {
      grouped[grouped.length - 1].contents.push(message.content);
      return;
    }

    grouped.push({
      ...message,
      contents: [message.content],
    });
  });
  console.log(messages);
  console.log(grouped);
};
