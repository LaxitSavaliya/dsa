function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0;
  let j = 0;

  while (j < n) {
    if (i - j >= m) {
      if (nums1[i] === 0) {
        nums1.splice(i, 0, nums2[j]);
        nums1.pop();
        j++;
      }
      if (nums1[i] < nums2[j]) {
        nums1.splice(i + 1, 0, nums2[j]);
        nums1.pop();
        j++;
      }
    }
    if (nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      nums1.pop();
      j++;
    }
    i++;
  }

  console.log(nums1);
}

// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   let i = m - 1;
//   let j = n - 1;
//   let k = m + n - 1;

//   while (j >= 0) {
//     if (i >= 0 && nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }

//     k--;
//   }
// }

merge([-1, 0, 1, 1, 0, 0, 0, 0, 0], 4, [-1, 0, 2, 2, 3], 5);
// [-1,-1,0,0,1,1,2,2,3]

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// expected: [1, 2, 2, 3, 5, 6]

merge([1], 1, [], 0);
// expected: [1]

merge([0], 0, [1], 1);
// expected: [1]

merge([2, 0], 1, [1], 1);
// expected: [1, 2]

merge([1, 5, 0, 0], 2, [2, 3], 2);
// expected: [1, 2, 3, 5]

merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
// expected: [1, 2, 3, 4, 5, 6]

merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3);
// expected: [1, 2, 3, 4, 5, 6]

merge([1, 2, 4, 5, 6, 0], 5, [3], 1);
// expected: [1, 2, 3, 4, 5, 6]
