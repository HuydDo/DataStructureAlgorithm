/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let hash = {};
  s.toLowerCase();
  addToHash(s, hash);

  function addToHash(str, hash){
    for (char of str){
      char in hash ? hash[char]++ : (hash[char] = 0);
    }
  }

  for(let i = 0; i < s.length; i++){
      if (hash[s[i]] === 0) return i;
  }

  return -1
};

// console.log(firstUniqChar("leetcode")); //0
console.log(firstUniqChar("loveleetcode")); //2