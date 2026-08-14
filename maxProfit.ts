function maxProfit(prices: number[]): number {
  let small = 0;
  let big = 0;
  let smallExist = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[smallExist] > prices[i]) {
      smallExist = i;
    }

    if (prices[big] < prices[i]) {
      big = i;

      if (smallExist > small) {
        small = smallExist;
      }
    }
  }

  console.log(small);
  console.log(big);

  return prices[big] - prices[small];
}

//  -9   1   1   17
//    -8   2   18
//       -7  19
//          10
// console.log(maxProfit([10, 1, 2, 3, 20]));
// expected: 19

console.log(maxProfit([3, 8, 2, 5, 1, 7]));
// expected: 6

// 12   -14   -2   17   -16
//   -2    -16   15    1
//      -4     1    -1
//          13   -15
//             -3
// console.log(maxProfit([7, 19, 5, 3, 20, 4]));
// // expected: 17

// // -1   -2   -1   -2
// //    -3   -3   -3
// //       -4   -5
// //          -6
// console.log(maxProfit([7, 6, 4, 3, 1]));
// // expected: 0

// console.log(maxProfit([1, 2, 3, 4, 5]));
// // expected: 4

// console.log(maxProfit([5, 4, 3, 2, 10]));
// // expected: 8

// console.log(maxProfit([2, 4, 1]));
// // expected: 2

// console.log(maxProfit([3, 3, 3, 3]));
// // expected: 0

// console.log(maxProfit([1]));
// // expected: 0

// console.log(maxProfit([2, 1, 2, 0, 1]));
// expected: 1
