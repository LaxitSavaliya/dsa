function sortPeople(names: string[], heights: number[]): string[] {
  const people = names.map((name, index) => ({
    name,
    height: heights[index],
  }));

  people.sort((a, b) => b.height - a.height);

  return people.map((person) => person.name);
}

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])); //["Mary","Emma","John"]

console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])); //["Bob","Alice","Bob"]
