/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (arr, pivot) {
  let low = [],
    high = [],
    equal = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      low.push(arr[i]);
    } else if (arr[i] > pivot) {
      high.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }
  

  return [].concat(low).concat(equal).concat(high);
};