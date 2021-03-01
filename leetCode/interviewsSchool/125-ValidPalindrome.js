/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s){
  if (s == null || s.length == 0)
    return true;
   
  s = s.toLowerCase()
  s = s.trim()
  //The g modifier is used to perform a global match (find all matches rather than stopping after the first match).
  //Erase ("") all the characters (g modifier) which are not (^) belong character (+)
  //a to z 0 to 9
  s = s.replace(/[^a-z0-9]/g, "")
  console.log(s)
  if (s.length < 2){
    return true
  }

  let l = 0, r = s.length -1
  while(l < r){
    if(s.charAt(l) != s.charAt(r)){
      return false
    }
    l++
    r--
  }
  return true;
};

// console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('r*acacar&'))
