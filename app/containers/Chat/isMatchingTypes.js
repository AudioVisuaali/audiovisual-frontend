export const isMatchingTypes = (current, prev) => {
  if (!prev) {
    return false;
  }

  if (current.user.unique !== prev.user.unique) {
    return false;
  }

  if (current.type === prev.type) {
    return true;
  }

  return false;
};
