// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   const stack: number[] = [];
//   let i: number = 0;
//   let j: number = 0;

//   while (i < nums1.length || j < nums2.length) {
//     if (i >= nums1.length) {
//       stack.push(nums2[j]);
//       j++;
//       continue;
//     }

//     if (j >= nums2.length) {
//       stack.push(nums1[i]);
//       i++;
//       continue;
//     }

//     if (nums1[i] === nums2[j]) {
//       stack.push(nums1[i]);
//       stack.push(nums2[j]);
//       i++;
//       j++;
//       continue;
//     }

//     if (nums1[i] > nums2[j]) {
//       stack.push(nums2[j]);
//       j++;
//     } else {
//       stack.push(nums1[i]);
//       i++;
//     }
//   }

//   if (stack.length % 2 === 0) {
//     const middle: number = stack.length / 2;
//     const median: number = (stack[middle] + stack[middle - 1]) / 2;
//     return median;
//   } else {
//     return stack[Math.floor(stack.length / 2)];
//   }
// }

// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   let i: number = 0;
//   let j: number = 0;

//   const m: number = nums1.length;
//   const n: number = nums2.length;
//   const len: number = m + n;

//   let check: number = Math.floor(len / 2);

//   let prev: number = 0;
//   let current: number = 0;

//   while (check >= 0) {
//     prev = current;

//     if (i >= m) {
//       current = nums2[j];
//       j++;
//     } else if (j >= n) {
//       current = nums1[i];
//       i++;
//     } else if (nums1[i] <= nums2[j]) {
//       current = nums1[i];
//       i++;
//     } else {
//       current = nums2[j];
//       j++;
//     }

//     check--;
//   }

//   if (len % 2 === 0) {
//     return (prev + current) / 2;
//   }

//   return current;
// }

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Always binary search on the smaller array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;

  let left = 0;
  let right = m;

  while (left <= right) {
    const partition1 = Math.floor((left + right) / 2);
    const partition2 = Math.floor((m + n + 1) / 2) - partition1;

    const left1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const right1 = partition1 === m ? Infinity : nums1[partition1];

    const left2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const right2 = partition2 === n ? Infinity : nums2[partition2];

    if (left1 <= right2 && left2 <= right1) {
      if ((m + n) % 2 === 0) {
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      }

      return Math.max(left1, left2);
    }

    if (left1 > right2) {
      right = partition1 - 1;
    } else {
      left = partition1 + 1;
    }
  }

  return 0;
}

console.log(findMedianSortedArrays([1, 4, 6, 7, 9], [2, 3, 5, 6, 8, 10]));
console.log(findMedianSortedArrays([1, 2, 3, 4], [6, 7]));
console.log(findMedianSortedArrays([1], [1, 2, 3, 4]));
console.log(findMedianSortedArrays([1, 2, 3, 4], [5, 6]));
