/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i =0;
    let temp; 
    while(i < nums.length){
        let k = i + 1

        while(k < nums.length && nums[k] === 0){
            k++
        }
        if(nums[i] === 0 && k < nums.length ){
            temp = nums[i]
            nums[i] = nums[k]
            nums[k] = temp
        }
        i++

    }
    return nums
};