function countSeniors(details: string[]): number {
  let result: number = 0;

  for (const detail of details) {
    if (Number(detail[11] + detail[12]) > 60) {
      result++;
    }
  }

  return result;
}

console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"]),
); //2

console.log(countSeniors(["1313579440F2036", "2921522980M5644"])); //0
