/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const original = x
    if (x < 0) return false;
    let rev = 0;

    while(x > 0){
        let r = x % 10;
        rev = (10* rev)+ r
        x = Math.floor(x / 10)
        }  
        if (rev === original){
        return true;
    } else {
    return false; 
    }
    
};