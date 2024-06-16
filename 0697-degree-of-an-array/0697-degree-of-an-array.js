/**
 * @param {number[]} nums
 * @return {number}
 */

var findShortestSubArray = function (nums) {
  let freq = new Map();
  let maxfreq = 0,
    maxval = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = freq.get(nums[i]);
    if (freq.has(nums[i])) {
      freq.set(nums[i], ++count);
    } else {
      freq.set(nums[i], 1);
    }
    if (freq.get(nums[i]) > maxfreq) {
      maxfreq = freq.get(nums[i]);
      maxval = nums[i];
    }
  }
  
  let candidates = [];
  for (let [key, val] of freq) {
    if (val == maxfreq) {
      candidates.push(key);
    }
  }

  let first = 0,
    last = 0,
    ans = Number.MAX_VALUE;

  for (let j = 0; j < candidates.length; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == candidates[j]) {
        first = i;
        break;
      }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] == candidates[j]) {
        last = i;
        break;
      }
    }
    ans = Math.min(ans, last - first + 1);
  }
  return ans;
};