export function setScores(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (e) {
    throw new Error("Please enable local storage!");
  }
}

export function getScores(key) {
  try {
    const serializedItem = localStorage.getItem(key);
    if (serializedItem) {
      return JSON.parse(serializedItem);
    }
    return { score1: 0, score2: 0 };
  } catch (e) {
    throw new Error("Please enable local storage!");
  }
}
