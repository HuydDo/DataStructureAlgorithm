/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    /**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  if (s === null)
      return;
  let l = 0, r = s.length - 1;
  
  while(l < r){
      let temp = s[l];
      s[l] = s[r];
      s[r] = temp;
      l++;
      r--;
  }
 }
}

reverseString('hello')
