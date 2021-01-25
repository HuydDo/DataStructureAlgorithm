var isPalindrome = function(s){
  if (s == null || s.length == 0)
    return true;
   
  let l = 0, r = s.length -1;
  while(l < r){
    if(s.charAt(l) != s.charAt(r))
      return false;
    l++; 
    r--;
  }
  return true;
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))