/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let counter = 0;
    let maxCount = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i]===1){
            counter = counter + 1;
            maxCount = Math.max(maxCount, counter);
        } else if (nums[i]===0){
            counter = 0;
        } 
    }
    return maxCount;
    
};