function swap(nums, x, y) {
  let temp = nums[x];
  nums[x] = nums[y];
  nums[y] = temp;
  return nums;
}

let arr = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
  let i = 0,
    low = 0,
    high = nums.length - 1;
  while (i <= high) {
    if (nums[i] < 1) {
      nums = swap(nums, i, low);
      i++, low++;
    } else if (nums[i] > 1) {
      nums = swap(nums, i, high);
      high--;
    } else {
      i++;
    }
  }
  return nums;
};