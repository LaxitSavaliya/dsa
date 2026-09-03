function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string,
): number {
  const index = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;

  let count: number = 0;

  for (const item of items) {
    if (item[index] === ruleValue) {
      count++;
    }
  }

  return count;
}

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver",
  ),
); // 1

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone",
  ),
); // 2
