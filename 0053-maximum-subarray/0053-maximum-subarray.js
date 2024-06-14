/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let max = nums[0],
    ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(nums[i], max + nums[i]);
    ans = Math.max(ans, max);
  }
  return ans;
}
