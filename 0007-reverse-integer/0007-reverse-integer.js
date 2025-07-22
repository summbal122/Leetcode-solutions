/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const limit = Math.pow(2,31)
  let rev = 0;
  let r = 0;
  let copy = x
  x = Math.abs(x);
  while(x >0){
   r = x % 10;
   rev = (10*rev) + r;
   x = Math.floor (x /10);
  }
  if (rev < -limit || rev > limit -1 ) return 0;
  return (copy < 0) ? -rev : rev;
};