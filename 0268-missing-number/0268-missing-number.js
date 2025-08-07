/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
let n = nums.length
 const sum = n * (n + 1) / 2
 let sumOfNums =  0
 for (let i = 0; i< n; i++){
  sumOfNums = sumOfNums + nums[i]
 }
 return sum - sumOfNums;
};