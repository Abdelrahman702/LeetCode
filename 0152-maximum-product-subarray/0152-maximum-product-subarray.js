/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let prev_max = nums[0],
    prev_min = nums[0],
    res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curr_max = Math.max(prev_max * nums[i], prev_min * nums[i], nums[i]);
    curr_min = Math.min(prev_max * nums[i], prev_min * nums[i], nums[i]);
    prev_max = curr_max;
    prev_min = curr_min;
    res = Math.max(prev_max, prev_min, res);
  }
  return res;

};