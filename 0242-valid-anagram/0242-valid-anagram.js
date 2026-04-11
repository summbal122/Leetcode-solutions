/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
      let freq = {}
   if (s.length !== t.length){
    return false
   }
  for(let char of s){
  if(freq[char]){
    freq[char] += 1
  } else{
    freq[char] = 1
  }
}

for(let char of t){
  if(!freq[char]){
    return false
  } else{
    freq[char] -=1
  }
}
return true
    
};