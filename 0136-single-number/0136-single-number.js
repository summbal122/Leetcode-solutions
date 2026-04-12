/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let hash = {}

  for(let num of nums){
    if(hash[num]){
      hash[num] = hash[num] + 1
    } else{
      hash[num] = 1
    }
  }
  for(let num of nums){
    if(hash[num] === 1) {
      return num
    }
  }
  
}