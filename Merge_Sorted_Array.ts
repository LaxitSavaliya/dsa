function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const map = new Map();

  for (const num of nums2) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let k = 0

  while(k!==-1) {
    const getPrev: number | undefined = map.get(nums1[k] - 1);
    const getNext: number | undefined = map.get(nums1[k] + 1);

    if(getPrev !== undefined && getNext !== undefined) {
      nums1.pop() && nums1.splice(k+1, 0, getNext);
      nums1.pop() && nums1.splice(k, 0, getPrev);

      k = k+3;
    } else if (getPrev !== undefined) {
      nums1.pop() && nums1.splice(k, 0, getPrev);
      k = k + 2
    } else if (getNext !== undefined) {
      nums1.pop() && nums1.splice(k+1, 0, getNext);
      k = k + 2
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    const getPrev: number | undefined = map.get(nums1[i] - 1);
    const getNext: number | undefined = map.get(nums1[i] + 1);

    if (getPrev !== undefined) {
      nums1[]
    }
  }
}

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
