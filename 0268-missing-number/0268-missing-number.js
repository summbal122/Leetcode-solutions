/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(let i = 0; i <= nums.length; i++){
       let found = false;
       for (let j = 0; j < nums.length; j++){
        if (nums[j] === i){
            found = true;
            break;
        }
       }
       if (!found){
        return i;
       }
    }
    return
};