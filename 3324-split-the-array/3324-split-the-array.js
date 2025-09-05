/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let count = {}
    for(let i = 0; i < nums.length; i++){
        count[nums[i]] = (count[nums[i]] || 0) +1
        if(count[nums[i]] > 2){
            return false
        }
    }
    return true

};