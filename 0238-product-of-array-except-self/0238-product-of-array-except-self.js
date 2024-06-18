/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = new Array(nums.length);
  prefix[0] = 1;
  let postfix = new Array(nums.length);
  postfix[nums.length - 1] = 1;
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = nums[i - 1] * prefix[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix[i] = nums[i + 1] * postfix[i + 1];
  }

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(postfix[i] * prefix[i]);
  }
  return ans;
};