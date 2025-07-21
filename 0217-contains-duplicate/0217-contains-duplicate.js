/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   const present = new Set();
   for (let num of nums){
    if(present.has(num)){
        return true;
    } else {
        present.add(num);
    }
   }
   return false;
    
};