function maxProfit(prices: number[]): number {
  let smallIdx: number = 0;
  let bigIdx: number = 0;

  let lastSmallIdx: number = 0;

  for (let i = 1; i < prices.length; i++) {
    const small: number = prices[smallIdx];
    const big: number = prices[bigIdx];
    const lastSmall: number = prices[lastSmallIdx];
    const current: number = prices[i];

    if (current > big) {
      if (small > lastSmall) {
        smallIdx = lastSmallIdx;
      }
      bigIdx = i;
    } else {
      if (current < small && current < lastSmall) {
        lastSmallIdx = i;
      } else if (big - small < current - lastSmall) {
        smallIdx = lastSmallIdx;
        bigIdx = i;
      }
    }
  }

  return prices[bigIdx] - prices[smallIdx];
}

// console.log(maxProfit([2, 4, 1, 5])); //4
// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(maxProfit([7, 6, 4, 3, 1])); // 0
// console.log(maxProfit([1, 2, 3, 4, 5])); // 4
// console.log(maxProfit([5, 4, 3, 2, 1])); // 0
// console.log(maxProfit([2, 4, 1])); // 2
// console.log(maxProfit([3, 2, 6, 1, 5])); // 4
// console.log(maxProfit([1])); // 0
// console.log(maxProfit([1, 2])); // 1
// console.log(maxProfit([2, 1])); // 0
// console.log(maxProfit([2, 2, 2, 2])); // 0
// console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // 4
// console.log(maxProfit([1, 5, 2, 10])); // 9

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([5, 4, 3, 2, 1])); // 0
console.log(maxProfit([2, 4, 1, 5])); // 4
console.log(maxProfit([3, 2, 6, 1, 5])); // 4
console.log(maxProfit([2, 1, 2, 0, 1])); // 1
console.log(maxProfit([3, 1, 4, 2, 8])); // 7
