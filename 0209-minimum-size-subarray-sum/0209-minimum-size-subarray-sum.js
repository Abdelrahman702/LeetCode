/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let s = 0,
    e = 0;
  let sum = nums[0],
    min_length = Number.MAX_VALUE;
  while (s < nums.length) {
    if (sum < target) {
      if (e == nums.length - 1) break;
      e++;
      sum += nums[e];
    } else if (sum > target) {
      min_length = Math.min(min_length, e - s + 1);
      sum -= nums[s];
      s++;
    } else {
      min_length = Math.min(min_length, e - s + 1);
      e++;
      if (e == nums.length) break;
      sum += nums[e];
    }
  }
  return min_length != Number.MAX_VALUE ? min_length : 0;
};